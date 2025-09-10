'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function VisionIntro() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why flood relief matters now</h2>
      <p className="text-muted-foreground">
        Punjab faces its worst floods since 1988. Homes were washed away, livelihoods lost, and families displaced. Our vision is simple: help families return to safe, dignified homes and rebuild their lives.
      </p>
      <div className="aspect-[16/9] w-full bg-muted/50 rounded-md flex items-center justify-center text-sm text-muted-foreground">
        Impact hero image placeholder
      </div>
    </section>
  )
}

export function WhatWeDo() {
  const items = [
    { title: 'Immediate relief', desc: 'Food, clean water, medicine, and temporary shelter' },
    { title: 'Recovery support', desc: 'Rebuilding homes and restoring stability for families' },
    { title: 'Long-term planning', desc: 'Community resilience and preparedness for future disasters' },
  ]
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold">What Global Sikhs is doing</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((i, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-base">{i.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export function HowWeOperate() {
  const ops = [
    'Ground teams: local volunteers who know every village and family',
    'Supply chain: direct partnerships with suppliers',
    'Financial tracking: every rupee tracked and reported',
    'Regular updates: progress shared every 15 days',
  ]
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">How we operate</h3>
      <Card>
        <CardContent className="pt-6">
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            {ops.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

export function SelectionCriteria() {
  const blocks = [
    {
      title: 'Priority 1 — Complete loss families',
      points: [
        'Home completely destroyed; all belongings lost',
        'No income source; elderly/disabled members',
      ],
    },
    {
      title: 'Priority 2 — Partial loss families',
      points: [
        'Home damaged but repairable',
        'Some support available or can co-contribute',
      ],
    },
    {
      title: 'Priority 3 — Recovery support',
      points: [
        'Minor damage; support to return to normal',
        'Skill training or small business support helps',
      ],
    },
  ]
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Who we prioritize</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blocks.map((b, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-base">{b.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {b.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export function ApproachPhases() {
  const phases = [
    {
      title: 'Immediate (0–3 months)',
      bullets: ['Emergency food and shelter', 'Medical care and clean water', 'Temporary schooling for children'],
    },
    {
      title: 'Recovery (3–12 months)',
      bullets: ['Rebuild flood-resistant homes', 'Restore farmland and provide seeds', 'Create temporary incomes'],
    },
    {
      title: 'Resilience (1–3 years)',
      bullets: ['Disaster preparedness training', 'Drainage and water management', 'Alternative income sources'],
    },
  ]
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Our approach</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((ph, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-base">{ph.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {ph.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

