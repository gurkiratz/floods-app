import { PledgeToImpact, SupportSLAs } from '@/components/sections/reporting-sections'

export default function RoadmapReportingPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Roadmap & Reporting</h1>
        <p className="text-muted-foreground mt-4">
          We commit to transparent progress tracking, cost disclosures, and beneficiary verification.
        </p>
      </div>

      <PledgeToImpact />
      <SupportSLAs />

      <div>
        <h2 className="text-xl font-semibold">Public reporting page</h2>
        <p className="text-sm text-muted-foreground mt-2">
          We will publish regular summaries including number of homes completed, work-in-progress, total pledged amounts, and expenditures against budget.
        </p>
        <div className="aspect-[16/9] w-full bg-muted/50 rounded mt-4 flex items-center justify-center text-sm text-muted-foreground">
          Reporting dashboard mockup placeholder
        </div>
      </div>
    </div>
  )
}

