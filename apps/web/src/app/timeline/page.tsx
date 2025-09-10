export default function TimelinePage() {
  const milestones = [
    { period: 'Phase 1', title: 'Site selection & verification', desc: 'Identify villages, assess damage, verify beneficiaries, and finalize layouts.' },
    { period: 'Phase 2', title: 'Foundation & structure', desc: 'Raised plinth, walls, roofing, and essential services setup.' },
    { period: 'Phase 3', title: 'Finishing & handover', desc: 'Plastering, doors/windows, sanitation fixtures, and formal handover.' },
  ]

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Project Timeline</h1>
        <p className="text-muted-foreground mt-4">
          A phased approach with public updates at each milestone to ensure accountability.
        </p>
      </div>

      <div className="space-y-6">
        {milestones.map((m, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-start">
            <div className="md:col-span-2">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{m.period}</div>
              <div className="text-lg font-semibold">{m.title}</div>
            </div>
            <div className="md:col-span-4">
              <div className="aspect-[16/9] w-full bg-muted/40 rounded mb-3 flex items-center justify-center text-xs text-muted-foreground">Milestone image placeholder</div>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

