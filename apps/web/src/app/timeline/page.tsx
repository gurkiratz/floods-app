import Image from 'next/image'

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="rounded-xl overflow-hidden mb-8">
        <Image
          src="/images/gs-ardaas.jpg"
          alt="Timeline hero image: construction site"
          className="w-full h-[400px] object-cover"
          width={800}
          height={224}
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">
        Project timeline for flood recovery
      </h1>
      <p className="text-muted-foreground mb-8">
        A realistic, phased plan from emergency response to long-term
        resilience.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">
            Phase 1: Emergency response (Sep–Nov 2025)
          </h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2">
            <li>
              Immediate relief: food kits, shelters, drinking water, medical
              supplies
            </li>
            <li>
              Assessment & planning: damage assessment, family registration,
              designs, permissions
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">
            Phase 2: Recovery & reconstruction (Dec 2025–Aug 2026)
          </h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2">
            <li>Foundations & home construction for Priority 1 families</li>
            <li>
              Restore schools and health centers, repair irrigation, provide
              seeds
            </li>
            <li>Skill training and income generation programs</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">
            Phase 3: Long-term resilience (Sep 2026–Sep 2027)
          </h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2">
            <li>
              Complete remaining homes, improve drainage and flood protection
            </li>
            <li>Disaster preparedness committees, training youth responders</li>
            <li>Early warning systems, elevated storage, maintenance funds</li>
          </ul>
        </section>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Monthly progress targets</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border rounded-md">
            <thead className="bg-muted">
              <tr>
                <th className="p-3">Timeline</th>
                <th className="p-3">Homes Built</th>
                <th className="p-3">Families Supported</th>
                <th className="p-3">Villages Restored</th>
                <th className="p-3">Jobs Created</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Month 3</td>
                <td className="p-3">0</td>
                <td className="p-3">5,000</td>
                <td className="p-3">0</td>
                <td className="p-3">200</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Month 6</td>
                <td className="p-3">500</td>
                <td className="p-3">4,500</td>
                <td className="p-3">15</td>
                <td className="p-3">800</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Month 9</td>
                <td className="p-3">1,200</td>
                <td className="p-3">3,000</td>
                <td className="p-3">35</td>
                <td className="p-3">1,500</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Month 12</td>
                <td className="p-3">2,000</td>
                <td className="p-3">1,500</td>
                <td className="p-3">50</td>
                <td className="p-3">2,000</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Month 18</td>
                <td className="p-3">2,500</td>
                <td className="p-3">500</td>
                <td className="p-3">75</td>
                <td className="p-3">1,200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
