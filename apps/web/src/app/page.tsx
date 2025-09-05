import HeroSection from '@/components/hero-section'
import Footer from '@/components/footer'
import ProgressStatsSection from '@/components/progress-stats-section'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Pledge Form */}
      <HeroSection />

      {/* Progress Stats Section */}
      <ProgressStatsSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
