'use client'

import PledgeForm from './pledge-form'

export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/landing-img-2.jpeg"
          alt="Global Sikhs relief work - helping families affected by floods"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability in both light and dark themes */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent dark:from-black/70 dark:to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Help Flood-Affected Families in Punjab Rebuild Their Homes
            </h1>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-white/90">
                One pledge = one safe 2-room home (800 sq ft) for a displaced
                family.
              </p>

              <p className="text-sm text-white/80">
                Over 1,200 homes lost, 5,000+ families displaced
              </p>
            </div>
          </div>

          {/* Pledge Form */}
          <div className="flex justify-center lg:justify-end">
            <PledgeForm />
          </div>
        </div>
      </div>
    </section>
  )
}
