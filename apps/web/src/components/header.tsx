'use client'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { useState, useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`rounded-xl m-4 z-50 py-2 transition-all duration-300 ${
        isScrolled ? 'bg-white/60 dark:bg-black/40 backdrop-blur-md' : 'bg-white/5 backdrop-blur-xs'
      }`}
    >
      <div
        className="container mx-auto flex h-16 items-center justify-between px-4"
        style={{ backgroundColor: 'transparent' }}
      >
        {/* NGO Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/gobalsikhs-logo-landing.svg"
              alt="Global Sikhs Logo"
              className="h-10 w-auto"
            />
            <span className="hidden sm:inline text-sm font-semibold tracking-wide">Global Sikhs</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/vision" className="hover:underline underline-offset-4">Vision</Link>
          <Link href="/timeline" className="hover:underline underline-offset-4">Timeline</Link>
          <Link href="/roadmap-reporting" className="hover:underline underline-offset-4">Roadmap & Reporting</Link>
          <Link href="/in-kind-donations" className="hover:underline underline-offset-4">In-Kind Donations</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="#pledge-form"
            className="hidden md:inline-flex items-center rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Pledge Now
          </Link>

          <ModeToggle />

          {/* Mobile menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-md border px-3 py-2 text-sm">Menu</DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-56">
                <DropdownMenuItem asChild>
                  <Link href="#pledge-form">Pledge Now</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/vision">Vision</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/timeline">Timeline</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/roadmap-reporting">Roadmap & Reporting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/in-kind-donations">In-Kind Donations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
