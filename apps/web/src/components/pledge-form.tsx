'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useMutation } from 'convex/react'
import { api } from '@floods-app/backend/convex/_generated/api'
import { toast } from 'sonner'
import { z } from 'zod'

// Constants
const HOUSE_PRICE = 600000 // ₹6,00,000 per house
const MIN_AMOUNT = 50000 // ₹50,000 minimum

// Predefined amounts
const PREDEFINED_AMOUNTS = [
  {
    amount: 100000,
    label: '₹1,00,000',
    description: '1/6 house',
    popular: false,
  },
  {
    amount: 300000,
    label: '₹3,00,000',
    description: '1/2 house',
    popular: false,
  },
  {
    amount: 600000,
    label: '₹6,00,000',
    description: '1 complete house',
    popular: false,
  },
  {
    amount: 1200000,
    label: '₹12,00,000',
    description: '2 houses',
    popular: false,
  },
]

// Zod validation schema
const pledgeSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val || val.trim() === '') return true
      // Indian phone number validation: supports +91, 0, or direct 10-digit numbers
      const phoneRegex = /^(\+91[\s-]?)?[0]?[6-9]\d{9}$/
      return phoneRegex.test(val.replace(/[\s-]/g, ''))
    }, 'Please enter a valid Indian phone number (e.g., +91 98765 43210 or 9876543210)'),
  pledgeAmount: z
    .number()
    .min(
      MIN_AMOUNT,
      `Minimum pledge amount is ₹${MIN_AMOUNT.toLocaleString('en-IN')}`
    )
    .max(100000000, 'Maximum pledge amount is ₹10,00,00,000'), // 10 crores max
  message: z
    .string()
    .max(500, 'Message must be less than 500 characters')
    .optional(),
})

type FormData = {
  name: string
  email: string
  phone: string
  pledgeAmount: string
  customAmount: string
  message: string
}

type ValidationErrors = {
  [K in keyof FormData]?: string
}

// Utility functions
const formatIndianCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

const calculateHouses = (amount: number): number => {
  const rawHouses = amount / HOUSE_PRICE
  // Round to 2 decimal places if it's a decimal, otherwise keep as whole number
  return rawHouses % 1 === 0 ? rawHouses : Math.round(rawHouses * 100) / 100
}

const formatHouseDescription = (houses: number): string => {
  if (houses < 1) {
    const fraction = Math.round(houses * 6)
    return `${fraction}/6 house`
  } else if (houses === 1) {
    return '1 complete house'
  } else if (houses < 2) {
    const wholePart = Math.floor(houses)
    const fractionalPart = houses - wholePart
    const fraction = Math.round(fractionalPart * 6)
    return `${wholePart} house + ${fraction}/6 house`
  } else {
    const rounded = Math.round(houses * 10) / 10
    return `${rounded} houses`
  }
}

export default function PledgeForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    pledgeAmount: '100000', // Default to ₹1,00,000
    customAmount: '',
    message: '',
  })
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const createPledge = useMutation(api.pledges.createPledge)

  const getCurrentAmount = (): number => {
    if (formData.pledgeAmount === 'custom') {
      return parseInt(formData.customAmount) || 0
    }
    return parseInt(formData.pledgeAmount) || 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    let formattedValue = value

    // Apply field-specific formatting and restrictions
    switch (field) {
      case 'name':
        // Allow only letters, spaces, and common name characters
        formattedValue = value.replace(/[^a-zA-Z\s'-]/g, '')
        break

      case 'phone':
        // Remove all non-numeric characters except +
        const cleaned = value.replace(/[^\d+]/g, '')

        // Format Indian phone number
        if (cleaned.startsWith('+91')) {
          // Format: +91 XXXXX XXXXX
          const digits = cleaned.slice(3)
          if (digits.length <= 5) {
            formattedValue = `+91 ${digits}`
          } else if (digits.length <= 10) {
            formattedValue = `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
          } else {
            formattedValue = `+91 ${digits.slice(0, 5)} ${digits.slice(5, 10)}`
          }
        } else if (cleaned.startsWith('+')) {
          // Keep other country codes as is but limit length
          formattedValue = cleaned.slice(0, 15)
        } else {
          // Format domestic number: XXXXX XXXXX
          const digits = cleaned.replace(/^0+/, '') // Remove leading zeros
          if (digits.length <= 5) {
            formattedValue = digits
          } else if (digits.length <= 10) {
            formattedValue = `${digits.slice(0, 5)} ${digits.slice(5)}`
          } else {
            formattedValue = `${digits.slice(0, 5)} ${digits.slice(5, 10)}`
          }
        }
        break

      case 'pledgeAmount':
        formattedValue = value
        // Clear custom amount when selecting predefined amount
        if (value !== 'custom') {
          setFormData((prev) => ({ ...prev, customAmount: '' }))
        }
        break

      case 'customAmount':
        // Allow only numbers
        formattedValue = value.replace(/[^\d]/g, '')
        break

      case 'email':
        // Basic email formatting (remove spaces)
        formattedValue = value.replace(/\s/g, '').toLowerCase()
        break

      case 'message':
        // Limit message length
        if (value.length > 500) {
          formattedValue = value.slice(0, 500)
        }
        break
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }))

    // Clear validation error for this field when user starts typing
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    try {
      // Create validation data with the correct amount
      const currentAmount = getCurrentAmount()

      const validationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pledgeAmount: currentAmount,
        message: formData.message,
      }

      pledgeSchema.parse(validationData)
      setValidationErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: ValidationErrors = {}
        error.issues.forEach((issue: z.ZodIssue) => {
          const field = issue.path[0] as keyof FormData
          if (field && !errors[field]) {
            errors[field] = issue.message
          }
        })
        setValidationErrors(errors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form before submission
    if (!validateForm()) {
      toast.error('Please fix the validation errors before submitting.')
      return
    }

    setIsSubmitting(true)

    try {
      const currentAmount = getCurrentAmount()

      // Parse and validate data one more time for type safety
      const validatedData = pledgeSchema.parse({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pledgeAmount: currentAmount,
        message: formData.message,
      })

      await createPledge({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || undefined,
        pledgeAmount: validatedData.pledgeAmount,
        message: validatedData.message || undefined,
      })

      setIsSubmitted(true)
      toast.success('Pledge submitted successfully!')
    } catch (error) {
      console.error('Error submitting pledge:', error)
      toast.error('Failed to submit pledge. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    const currentAmount = getCurrentAmount()
    const houses = calculateHouses(currentAmount)
    const shareMessage = `I just pledged ${formatIndianCurrency(
      currentAmount
    )} to help rebuild homes for flood-affected families in Punjab. This will sponsor ${formatHouseDescription(
      houses
    )}. Join me in making a difference! 🏠❤️`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      shareMessage
    )}`

    return (
      <Card className="w-full max-w-md border-2 border-green-200 dark:border-green-800">
        <CardContent className="pt-8">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">🎉</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">
                Thank you, {formData.name}!
              </h3>
              <Badge
                variant="outline"
                className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
              >
                Pledge Confirmed
              </Badge>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-xl p-6 space-y-3">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {formatIndianCurrency(currentAmount)}
              </p>
              <p className="text-base font-medium text-foreground">
                Your contribution will sponsor {formatHouseDescription(houses)}
              </p>
              <Separator className="my-3" />
              <p className="text-sm text-muted-foreground">
                Our team will contact you within 24 hours with next steps and
                detailed progress updates.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-sm font-medium">Spread the word:</p>
              <div className="flex gap-3 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                  </svg>
                  Share on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Copy message to clipboard for Instagram sharing
                    navigator.clipboard.writeText(shareMessage)
                    toast.success(
                      'Message copied! You can now paste it on Instagram'
                    )
                  }}
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Share on Instagram
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const currentAmount = getCurrentAmount()
  const houses = calculateHouses(currentAmount)

  return (
    <Card className="w-full max-w-md shadow-xl border-2 border-border/50">
      <CardHeader className="text-center pb-4">
        <div className="space-y-2">
          {/* <Badge variant="outline" className="mx-auto w-fit">
            🏠 Flood Relief
          </Badge> */}
          <CardTitle className="text-2xl font-bold">Make Your Pledge</CardTitle>
          <p className="text-sm text-muted-foreground">
            Help rebuild homes for flood-affected families
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              placeholder="Enter your full name"
              className={
                validationErrors.name
                  ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-400'
                  : 'placeholder:text-muted-foreground/50 border-2 border-muted'
              }
              maxLength={100}
              autoComplete="name"
            />
            {validationErrors.name && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {validationErrors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              placeholder="your.email@example.com"
              className={
                validationErrors.email
                  ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-400'
                  : 'placeholder:text-muted-foreground/50 border-2 border-muted'
              }
              maxLength={255}
              autoComplete="email"
            />
            {validationErrors.email && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {validationErrors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+91 98765 43210"
              className={
                validationErrors.phone
                  ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-400'
                  : 'placeholder:text-muted-foreground/50 border-2 border-muted'
              }
              maxLength={15}
              autoComplete="tel"
              inputMode="numeric"
            />
            {validationErrors.phone && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {validationErrors.phone}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="amount" className="text-base font-semibold">
              Pledge Amount *
            </Label>

            {/* Amount Selection Grid */}
            <div className="grid grid-cols-2 gap-3">
              {PREDEFINED_AMOUNTS.map((option) => (
                <div key={option.amount} className="relative">
                  <Input
                    type="radio"
                    id={`amount-${option.amount}`}
                    name="pledgeAmount"
                    value={option.amount.toString()}
                    checked={formData.pledgeAmount === option.amount.toString()}
                    onChange={(e) =>
                      handleInputChange('pledgeAmount', e.target.value)
                    }
                    className="sr-only"
                  />
                  <label
                    htmlFor={`amount-${option.amount}`}
                    className={`block p-4 rounded-lg border-2 border-muted cursor-pointer transition-all duration-200 hover:shadow-md ${
                      formData.pledgeAmount === option.amount.toString()
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/50 shadow-md'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-center space-y-1">
                      {option.popular && (
                        <Badge
                          variant="secondary"
                          className="text-xs mb-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                        >
                          Popular
                        </Badge>
                      )}
                      <p className="font-bold text-lg">{option.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </label>
                </div>
              ))}
            </div>

            {/* Custom Amount Option */}
            <div className="relative">
              <Input
                type="radio"
                id="amount-custom"
                name="pledgeAmount"
                value="custom"
                checked={formData.pledgeAmount === 'custom'}
                onChange={(e) =>
                  handleInputChange('pledgeAmount', e.target.value)
                }
                className="sr-only"
              />
              <label
                htmlFor="amount-custom"
                className={`block p-4 rounded-lg border-2 border-muted cursor-pointer transition-all duration-200 hover:shadow-md ${
                  formData.pledgeAmount === 'custom'
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/50 shadow-md'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="text-center">
                  <p className="font-bold">Custom Amount</p>
                  <p className="text-xs text-muted-foreground">
                    Enter your own amount
                  </p>
                </div>
              </label>
            </div>
            {validationErrors.pledgeAmount && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {validationErrors.pledgeAmount}
              </p>
            )}

            {formData.pledgeAmount === 'custom' && (
              <div className="mt-2">
                <Input
                  type="number"
                  value={formData.customAmount}
                  onChange={(e) =>
                    handleInputChange('customAmount', e.target.value)
                  }
                  placeholder={`Enter amount (minimum ₹${MIN_AMOUNT.toLocaleString(
                    'en-IN'
                  )})`}
                  min={MIN_AMOUNT}
                  className={
                    validationErrors.customAmount
                      ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-400'
                      : 'placeholder:text-muted-foreground/50 border-2 border-muted'
                  }
                  inputMode="numeric"
                />
                {validationErrors.customAmount && (
                  <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                    {validationErrors.customAmount}
                  </p>
                )}
              </div>
            )}

            {currentAmount > 0 && (
              <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">🏠</span>
                    <p className="text-xl font-bold text-blue-900 dark:text-blue-100">
                      {formatIndianCurrency(currentAmount)}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                  >
                    Sponsors {formatHouseDescription(houses)}
                  </Badge>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    Your impact: Safe shelter for displaced families
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="message">Your Message</Label>
              <span className="text-xs text-muted-foreground">
                {formData.message.length}/500
              </span>
            </div>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Any additional message or requirements..."
              className={`min-h-[80px] ${
                validationErrors.message
                  ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-400'
                  : 'border-2 border-muted placeholder:text-muted-foreground/50'
              }`}
              maxLength={500}
            />
            {validationErrors.message && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {validationErrors.message}
              </p>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full text-lg py-6 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting Pledge...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Pledge Now</span>
                  {/* <span className="text-xl">🤝</span> */}
                </div>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-3">
              Secure and trusted • Our team will contact you within 24 hours
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
