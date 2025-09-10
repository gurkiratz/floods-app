import Image from 'next/image'

export default function ReportingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="rounded-xl overflow-hidden mb-8">
        <Image
          src="/images/gs-home-13.jpg"
          alt="Timeline hero image: construction site"
          className="w-full h-[400px] object-cover"
          width={800}
          height={224}
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">
        Your journey from pledge to completion
      </h1>
      <p className="text-muted-foreground mb-8">
        Transparent, bi-weekly updates from allocation to handover and beyond.
      </p>

      <div className="space-y-8 text-sm">
        <section>
          <h2 className="text-xl font-semibold">
            Step 1: After you make your pledge
          </h2>
          <ul className="list-disc pl-5 mt-2 text-muted-foreground">
            <li>
              Within 24 hours: confirmation, thank-you call, WhatsApp group
            </li>
            <li>
              Within 48 hours: family identified, profile prepared, initial
              assessment
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            Step 2: Family allocation and introduction
          </h2>
          <p className="mt-2 text-muted-foreground">
            You receive a full family dossier with GPS, photos, and the
            rebuilding plan.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Step 3: Construction begins</h2>
          <p className="mt-2 text-muted-foreground">
            Ground-breaking photos, video message, timeline, and team
            introductions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            Step 4: Updates every 15 days
          </h2>
          <ul className="list-disc pl-5 mt-2 text-muted-foreground">
            <li>Photos and videos showing progress</li>
            <li>Written reports with milestones and challenges</li>
            <li>Financial tracking by category and remaining balance</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">
            Step 5: Completion and handover
          </h2>
          <p className="mt-2 text-muted-foreground">
            Completion photos, video tour, certificate, legal documents, and
            ceremony.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Step 6: Long-term follow-up</h2>
          <p className="mt-2 text-muted-foreground">
            Updates at 3, 6, and 12 months on livelihoods, education, and
            community.
          </p>
        </section>
      </div>
    </div>
  )
}
