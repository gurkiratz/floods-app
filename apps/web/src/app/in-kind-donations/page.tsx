export default function InKindDonationsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">In-Kind Donations</h1>
        <p className="text-muted-foreground mt-4">
          Donate materials, logistics, or skilled labor. We coordinate to match needs at specific sites and phases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          {title:'Materials',desc:'Cement, bricks, steel, roofing sheets, doors/windows, fixtures.'},
          {title:'Logistics',desc:'Transport, warehousing, last-mile delivery to sites.'},
          {title:'Skilled labor',desc:'Masons, carpenters, electricians, plumbers, site supervisors.'},
        ].map((item, i) => (
          <div key={i} className="p-6 border rounded-lg">
            <div className="aspect-video w-full bg-muted/40 rounded mb-3 flex items-center justify-center text-xs text-muted-foreground">Image placeholder</div>
            <div className="text-lg font-semibold">{item.title}</div>
            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">How to offer support</h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
          <li>Share item/service details, quantities, and availability dates.</li>
          <li>We verify site needs and confirm timelines and logistics.</li>
          <li>We coordinate delivery, storage, and utilization with documentation.</li>
        </ol>
        <div className="aspect-[16/9] w-full bg-muted/50 rounded mt-4 flex items-center justify-center text-sm text-muted-foreground">
          In-kind intake form placeholder
        </div>
      </div>
    </div>
  )
}

