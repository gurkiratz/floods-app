import { TimelinePhases } from '@/components/sections/timeline-sections'

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Project Timeline</h1>
        <p className="text-muted-foreground mt-4">
          A phased approach with public updates at each milestone to ensure accountability.
        </p>
      </div>

      <TimelinePhases />
    </div>
  )
}

