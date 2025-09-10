'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PledgeToImpact() {
  const steps = [
    { title: 'After you pledge', points: ['Confirmation and welcome', 'Project overview', 'WhatsApp updates group'] },
    { title: 'Family allocation', points: ['Family dossier', 'Location and photos', 'Rebuilding plan'] },
    { title: 'Construction & updates', points: ['Weekly photos/videos', 'Milestone tracking', 'Financial breakdowns'] },
    { title: 'Completion & handover', points: ['Final photos and tour', 'Certificates and documents', 'Handover ceremony'] },
  ]
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold">Your journey from pledge to completion</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((s, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-base">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {s.points.map((p, j) => (
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

export function SupportSLAs() {
  const items = [
    'WhatsApp: within 2 hours (business days); Email: within 24 hours',
    'Dedicated local coordinator and donor relations contact',
    'Visit support: logistics, translation, documentation',
  ]
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Donor support & SLAs</h3>
      <Card>
        <CardContent className="pt-6">
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            {items.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

