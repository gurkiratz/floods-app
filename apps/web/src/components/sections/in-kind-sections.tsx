'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function InKindNeeds() {
  const categories = [
    { title: 'Construction materials', items: ['Steel bars, pipes, doors/windows', 'Cement, blocks, sand, waterproofing', 'Bricks, roofing, insulation, paint'] },
    { title: 'Electrical & appliances', items: ['Wiring, switches, MCBs, LED lights', 'Pumps, solar panels, inverters', 'Heaters, stoves, cylinders'] },
    { title: 'Household essentials', items: ['Cots, tables, storage, racks', 'Utensils, cookers, containers', 'Blankets, clothing, school uniforms'] },
  ]
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold">What we need most</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((c, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-base">{c.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {c.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export function InKindQuality() {
  const bullets = [
    'Construction: ISI certified, fresh stock, undamaged, code-compliant',
    'Electrical: BIS approved, warranty and manuals included',
    'Household: Clean, durable, culturally appropriate',
  ]
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Quality standards</h3>
      <Card>
        <CardContent className="pt-6">
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

export function InKindProcess() {
  const steps = [
    { title: 'Contact us', desc: 'Share items, quantities, and availability; we confirm current needs.' },
    { title: 'Pickup / delivery', desc: 'We coordinate centers, pickups, or direct-to-site delivery.' },
    { title: 'Documentation', desc: 'Receipts, photo proof of use, and allocation updates.' },
  ]
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold">How to donate materials</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-base">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

