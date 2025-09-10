import Image from 'next/image'
import Link from 'next/link'

export default function InKindDonationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="rounded-xl overflow-hidden mb-8">
        <Image
          src="/images/gs-home-14.jpg"
          alt="Timeline hero image: construction site"
          className="w-full h-[400px] object-cover"
          width={800}
          height={224}
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">
        How to donate materials instead of money
      </h1>
      <p className="text-muted-foreground mb-8">
        We need large volumes of quality materials to rebuild homes. Your
        in-kind donations go directly to families.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">What we need most</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Steel: TMT bars (8/10/12mm), pipes, doors/frames, mesh</li>
            <li>Cement & concrete: OPC 53, ready-mix, blocks, sand, gravel</li>
            <li>Building supplies: bricks, roof tiles, insulation, paint</li>
            <li>Electrical: wiring, switches, MCBs, LEDs, fans</li>
            <li>Appliances: water pumps, solar panels, inverters, heaters</li>
            <li>Household: cots, tables, storage, utensils, blankets</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Quality standards</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>
              Construction: ISI certified, cement &lt; 6 months, undamaged
            </li>
            <li>
              Electrical: BIS approved, warranty/info manuals, India voltage
            </li>
            <li>Household: clean, durable, culturally appropriate</li>
          </ul>
        </section>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border p-5 bg-card">
          <h3 className="font-semibold mb-2">Step 1: Contact us</h3>
          <p className="text-sm text-muted-foreground">
            Call +91-91453-92453 with item details. We’ll confirm needs and
            quantities.
          </p>
        </div>
        <div className="rounded-lg border p-5 bg-card">
          <h3 className="font-semibold mb-2">Step 2: Pickup or delivery</h3>
          <p className="text-sm text-muted-foreground">
            Drop at collection centers, we arrange pickup for bulk, or deliver
            to site.
          </p>
        </div>
        <div className="rounded-lg border p-5 bg-card">
          <h3 className="font-semibold mb-2">Step 3: Documentation</h3>
          <p className="text-sm text-muted-foreground">
            Tax receipts, usage photos, and beneficiary updates provided.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://wa.me/919145392453"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm"
        >
          WhatsApp our team
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm"
        >
          See collection centers
        </Link>
      </div>
    </div>
  )
}
