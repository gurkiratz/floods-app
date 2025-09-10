export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Vision</h1>
        <p className="text-muted-foreground mt-4">
          A dignified, flood-resilient home for every affected family in Punjab, delivered with transparency and community participation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">What we are building</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>2-room ~800 sq ft homes with sanitation and essential services</li>
            <li>Raised plinth and durable materials to mitigate future flood risk</li>
            <li>Fair selection through community verification and vulnerability scoring</li>
          </ul>
          <h2 className="text-xl font-semibold">Why this matters</h2>
          <p className="text-sm text-muted-foreground">
            Housing is the foundation for recovery—restoring safety, stability, and the ability to rebuild livelihoods with dignity.
          </p>
        </div>
        <div className="aspect-[4/3] w-full bg-muted/50 rounded-md flex items-center justify-center text-sm text-muted-foreground">
          Vision hero image placeholder
        </div>
      </div>
    </div>
  )
}

