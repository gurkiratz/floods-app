export default function RoadmapReportingPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Roadmap & Reporting</h1>
        <p className="text-muted-foreground mt-4">
          We commit to transparent progress tracking, cost disclosures, and beneficiary verification.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          {title:'Allocation & selection',desc:'Criteria-based selection with community oversight and vulnerability scoring.'},
          {title:'Milestone tracking',desc:'Foundation, structure, finishing—each with dated photo/video evidence.'},
          {title:'Financial reporting',desc:'Material and labor costs broken down by home and phase.'},
        ].map((item, i) => (
          <div key={i} className="p-6 border rounded-lg">
            <div className="aspect-video w-full bg-muted/40 rounded mb-3 flex items-center justify-center text-xs text-muted-foreground">Illustration placeholder</div>
            <div className="text-lg font-semibold">{item.title}</div>
            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

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

