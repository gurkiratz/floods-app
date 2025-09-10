'use client'

import Link from 'next/link'
import PledgeForm from './pledge-form'
import ProgressBar from './progress-bar'
import { handleAnchorClick } from '@/lib/smooth-scroll'
import SplitText from './ui/SplitText'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden">
      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/landing-img-2.jpeg"
            alt="Global Sikhs relief work - helping families affected by floods"
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          {/* Subtle pattern overlay for texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.1),transparent)] opacity-60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8 lg:pr-8">
              {/* Hero Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-white/90">
                  🏠 Flood Relief Initiative
                </span>
              </div>

              <SplitText
                text="Help Flood-Affected Families in Punjab Rebuild Their Homes"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight"
                tag="h1"
                delay={100}
                duration={0.8}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 60 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                rootMargin="-50px"
                textAlign="left"
              />

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white/95 font-medium leading-relaxed">
                  One pledge = one safe 2-room home (800 sq ft) for a displaced
                  family.
                </p>

                <p className="text-base text-white/85 leading-relaxed max-w-xl">
                  Transparent, trackable, and community-led recovery with Global
                  Sikhs. Every rupee accounted for, every family supported.
                </p>
              </div>

              {/* Progress Bar with enhanced styling */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                <ProgressBar />
              </div>

              {/* CTAs with better styling */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                {/* <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Link
                    href="#pledge"
                    onClick={(e) => handleAnchorClick(e, '#pledge')}
                  >
                    Pledge Now →
                  </Link>
                </Button> */}
                {/* <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold border-white/30 hover:border-white/50 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
                >
                  <Link
                    href="#how-it-works"
                    onClick={(e) => handleAnchorClick(e, '#how-it-works')}
                  >
                    See How It Works
                  </Link>
                </Button> */}
              </div>

              {/* Trust indicators */}
              {/* <div className="flex items-center gap-6 pt-6 text-white/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">GPS Tracked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">100% Transparent</span>
                </div>
              </div> */}
            </div>

            {/* Pledge Form */}
            <div className="flex justify-center lg:justify-end" id="pledge">
              <div className="w-full max-w-md">
                {/* Enhanced form container with glassmorphism */}
                <PledgeForm />
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
    </section>
  )
}
