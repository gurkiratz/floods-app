import HeroSection from '@/components/hero-section'
import Footer from '@/components/footer'
import ProgressStatsSection from '@/components/progress-stats-section'
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  CheckCircle,
  Home as HomeIcon,
  Shield,
  Eye,
  Clock,
  MapPin,
  Users,
  Heart,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Pledge Form */}
      <HeroSection />

      {/* Progress Stats Section */}
      <ProgressStatsSection />

      {/* Value Props / Impact Metrics */}
      <section
        className="py-20 bg-gradient-to-b from-background to-muted/20"
        id="impact"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How we make a difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every pledge creates lasting change through our comprehensive
              approach to flood recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Immediate Relief</CardTitle>
                <CardDescription>
                  Emergency support when families need it most
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Food, clean water, medicine, and temporary shelter delivered
                  by local teams within 48 hours of displacement.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl">Recovery Support</CardTitle>
                <CardDescription>
                  Building back better and stronger
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rebuilding homes with flood-resistant designs and restoring
                  livelihoods through skills training and microfinance.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Transparent Tracking</CardTitle>
                <CardDescription>
                  Full visibility into your impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every rupee tracked, bi-weekly progress updates, GPS
                  coordinates and photo verification of all construction phases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Tabs */}
      <section className="py-20 bg-muted/50" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Users className="w-3 h-3 mr-1" />
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How your pledge becomes a home
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From allocation to construction to handover, you get clear,
              regular updates at every step of the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <Card className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">After you pledge</h3>
                        <p className="text-sm text-muted-foreground">
                          Confirmation, personal call, and WhatsApp group
                          invitation within 24 hours.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Week 1</h3>
                        <p className="text-sm text-muted-foreground">
                          Complete family dossier with GPS coordinates, photos,
                          and construction plan.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                        <HomeIcon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          During construction
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Weekly photos, videos, and consultation on any
                          decisions that arise.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Every 15 days</h3>
                        <p className="text-sm text-muted-foreground">
                          Detailed progress reports with finances, materials
                          used, and timeline updates.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="/roadmap">See full reporting timeline</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gs-home-11.jpg"
                  alt="Project progress collage showing construction phases"
                  className="w-full h-96 object-cover"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container mx-auto px-4">
        <Separator className="my-8" />
      </div>

      {/* In-kind Donations CTA */}
      <section
        className="py-20 bg-gradient-to-r from-background via-muted/20 to-background"
        id="in-kind"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gs-home-9.jpg"
                  alt="Construction materials and supplies for flood relief"
                  className="w-full h-96 object-cover"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-orange-500/10 rounded-full blur-xl"></div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <Badge variant="outline" className="mb-4">
                  <HomeIcon className="w-3 h-3 mr-1" />
                  Material Donations
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Prefer donating materials?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We accept construction materials, appliances, and household
                  essentials to help families rebuild their lives.
                </p>
              </div>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Materials we need most</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Steel & Cement</Badge>
                    <Badge variant="secondary">Bricks & Tiles</Badge>
                    <Badge variant="secondary">Electrical Items</Badge>
                    <Badge variant="secondary">Appliances</Badge>
                    <Badge variant="secondary">Household Essentials</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All donated materials are quality-checked and distributed
                    based on family needs.
                  </p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="/in-kind-donations">View complete list</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://wa.me/919145392453"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact our team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Eye className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our flood relief process and
              transparency measures.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="updates"
                className="border rounded-lg px-6 bg-background/60 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left">
                  How often will I get updates on my sponsored home?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    You'll receive comprehensive updates every 15 days,
                    including photos of construction progress, written reports
                    on milestones achieved, and a detailed financial breakdown
                    showing exactly how funds were used. During critical
                    construction phases, we may send additional updates.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="visit"
                className="border rounded-lg px-6 bg-background/60 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left">
                  Can I visit the construction site and meet the family?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Absolutely! We encourage donors to visit. Just give us a
                    week's notice and we'll coordinate the visit, arrange local
                    transportation, and provide translation services if needed.
                    Many donors find meeting the families incredibly rewarding.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="delays"
                className="border rounded-lg px-6 bg-background/60 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left">
                  What happens if there are construction delays or issues?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We notify you immediately of any delays, explain the cause,
                    and provide a revised timeline. Whether it's weather,
                    material shortages, or other challenges, we adjust our plan
                    and continue regular reporting until the home is completed
                    to your satisfaction.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="materials"
                className="border rounded-lg px-6 bg-background/60 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left">
                  Do you accept in-kind donations instead of money?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, we gladly accept construction materials, appliances,
                    and household essentials. Visit our In-kind Donations page
                    for the complete list of needed items, quality standards,
                    and delivery instructions. This option works especially well
                    for businesses and bulk donors.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="verification"
                className="border rounded-lg px-6 bg-background/60 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left">
                  How do you verify that the money is used properly?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Every transaction is recorded with receipts, GPS coordinates
                    mark all construction sites, and we maintain photo
                    documentation of each construction phase. Our local teams
                    conduct regular inspections, and all financial records are
                    available for donor review at any time.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="timeline"
                className="border rounded-lg px-6 bg-background/60 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left">
                  How long does it typically take to complete a home?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    A typical 2-room home (800 sq ft) takes 6-8 weeks to
                    complete, depending on weather conditions and material
                    availability. We provide a detailed timeline after the
                    initial site assessment and keep you updated on progress
                    throughout the construction process.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
