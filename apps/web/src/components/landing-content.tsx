'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function LandingContent() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Impact Highlights */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What your pledge builds
            </h2>
            <p className="text-muted-foreground mt-3">
              Each home is a safe, dignified 2-room unit (~800 sq ft) with sanitation, built to withstand future floods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{title:'2-Room Home',desc:'Living + bedroom with proper ventilation and lighting'},{title:'Kitchen & Bath',desc:'Dedicated kitchen and sanitation unit for dignity and health'},{title:'Flood-Resilient',desc:'Raised plinth, durable materials, and vetted layouts'}].map((item, idx) => (
              <Card key={idx}>
                <div className="aspect-video w-full bg-muted/50 flex items-center justify-center text-xs text-muted-foreground">Image placeholder</div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div id="how-it-works" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How it works
            </h2>
            <p className="text-muted-foreground mt-3">
              A transparent pledge-to-construction pipeline with community verification at each step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {step:'01',title:'Pledge',desc:'Choose an amount or a full home. Receive confirmation and tracking ID.'},
              {step:'02',title:'Allocation',desc:'Sites and beneficiaries are verified with local partners and committees.'},
              {step:'03',title:'Build & Report',desc:'Construction milestones are documented with photos, dates, and costs.'},
            ].map((s, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.step}</div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full bg-muted/40 mb-3 flex items-center justify-center text-xs text-muted-foreground">Process image placeholder</div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transparency */}
        <div id="transparency" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Transparency & reporting</h3>
            <p className="text-muted-foreground">
              We publish progress, costs, and beneficiary details with verifiable updates. Regular reports include photos, milestone dates, and expenditure breakdowns.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/roadmap-reporting">View reporting approach</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#pledge-form">Pledge now</Link>
              </Button>
            </div>
          </div>
          <div className="aspect-video w-full bg-muted/50 rounded-md flex items-center justify-center text-sm text-muted-foreground">
            Reporting dashboard placeholder
          </div>
        </div>

        {/* In-kind donations CTA */}
        <div id="in-kind" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/3] w-full bg-muted/50 rounded-md flex items-center justify-center text-sm text-muted-foreground">
            Materials / logistics image placeholder
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Contribute materials or services</h3>
            <p className="text-muted-foreground">
              Prefer to donate cement, bricks, transport, or skilled labor? We coordinate vetted in-kind contributions aligned with site needs and timelines.
            </p>
            <Button asChild>
              <Link href="/in-kind-donations">Offer in-kind support</Link>
            </Button>
          </div>
        </div>

        {/* About blurb */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>About Global Sikhs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Global Sikhs is a humanitarian organization focused on rapid response and long-term recovery. In Punjab, we are helping families rebuild safe homes following the floods.
              </p>
              <div className="mt-4">
                <Button asChild variant="outline"><Link href="/about">Learn more</Link></Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <div className="aspect-video w-full bg-muted/50 flex items-center justify-center text-xs text-muted-foreground">Team / field image placeholder</div>
            <CardHeader>
              <CardTitle>Field presence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Local partners and community committees ensure fair selection and oversight.</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div id="faq" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Frequently asked questions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {q:'Can I sponsor a full home?', a:'Yes. One home is approximately ₹6,00,000. You can also co-sponsor.'},
              {q:'Will I receive updates?', a:'You will receive milestone updates and can view public reporting pages.'},
              {q:'Are donations tax-deductible?', a:'We will share applicable compliance and receipts depending on jurisdiction.'},
              {q:'How are beneficiaries selected?', a:'Through community verification, vulnerability scoring, and site feasibility.'},
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to help a family rebuild?</h3>
          <Button asChild size="lg">
            <Link href="#pledge-form">Make your pledge</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

