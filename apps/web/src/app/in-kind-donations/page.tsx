import { InKindNeeds, InKindQuality, InKindProcess } from '@/components/sections/in-kind-sections'

export default function InKindDonationsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">In-Kind Donations</h1>
        <p className="text-muted-foreground mt-4">
          Donate materials, logistics, or skilled labor. We coordinate to match needs at specific sites and phases.
        </p>
      </div>

      <InKindNeeds />
      <InKindQuality />
      <InKindProcess />
    </div>
  )
}

