import { VisionIntro, WhatWeDo, HowWeOperate, SelectionCriteria, ApproachPhases } from '@/components/sections/vision-sections'

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Vision</h1>
        <p className="text-muted-foreground mt-4">
          A dignified, flood-resilient home for every affected family in Punjab, delivered with transparency and community participation.
        </p>
      </div>

      <VisionIntro />
      <WhatWeDo />
      <HowWeOperate />
      <SelectionCriteria />
      <ApproachPhases />
    </div>
  )
}

