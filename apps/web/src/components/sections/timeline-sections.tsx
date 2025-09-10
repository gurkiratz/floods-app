'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TimelinePhases() {
  const phases = [
    { title: 'Phase 1: Emergency response (Sep–Nov 2025)', bullets: ['Relief kits, shelters, water & medical', 'Damage assessment and registrations', 'Finalize flood-resistant designs'] },
    { title: 'Phase 2: Recovery & reconstruction (Dec 2025–Aug 2026)', bullets: ['Foundations and structures', 'Community infra and utilities', 'Skills training and livelihoods'] },
    { title: 'Phase 3: Long-term resilience (Sep 2026–Sep 2027)', bullets: ['Complete homes; drainage & protection', 'Preparedness committees and training', 'Early warning systems and funds'] },
  ]
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold">Project timeline</h3>
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

