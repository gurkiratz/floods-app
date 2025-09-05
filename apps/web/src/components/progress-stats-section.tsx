'use client'

import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'convex/react'
import { api } from '@floods-app/backend/convex/_generated/api'
import { toast } from 'sonner'
import TopPledgersTable from './top-pledgers-table'

export default function ProgressStatsSection() {
  const recentPledges =
    useQuery(api.pledges.getRecentPledges, { limit: 10 }) ?? []
  const [displayedPledgeIds, setDisplayedPledgeIds] = useState<Set<string>>(
    new Set()
  )
  const [hasInitialized, setHasInitialized] = useState(false)
  const initializationRef = useRef(false)

  // Initialize with recent pledges on first load
  useEffect(() => {
    if (
      !hasInitialized &&
      recentPledges.length > 0 &&
      !initializationRef.current
    ) {
      initializationRef.current = true

      // Show the 5 most recent pledges as initial toasts
      const pledgesToShow = recentPledges.slice(0, 5)
      const newPledgeIds = new Set(recentPledges.map((p) => p._id))

      pledgesToShow.forEach((pledge, index) => {
        setTimeout(() => {
          toast.success(
            `${pledge.name} pledged to rebuild ${pledge.housesToSponsor} house${
              pledge.housesToSponsor !== 1 ? 's' : ''
            }`,
            {
              duration: 4000,
              position: 'bottom-right',
            }
          )
        }, index * 800) // Stagger the toasts
      })

      setDisplayedPledgeIds(newPledgeIds)
      setHasInitialized(true)
    }
  }, [recentPledges, hasInitialized])

  // Monitor for new pledges and show real-time toasts
  useEffect(() => {
    if (!hasInitialized || recentPledges.length === 0) return

    const currentPledgeIds = new Set(recentPledges.map((p) => p._id))
    const newPledges = recentPledges.filter(
      (pledge) => !displayedPledgeIds.has(pledge._id)
    )

    if (newPledges.length > 0) {
      newPledges.forEach((pledge, index) => {
        setTimeout(() => {
          toast.success(
            `${pledge.name} pledged to rebuild ${pledge.housesToSponsor} house${
              pledge.housesToSponsor !== 1 ? 's' : ''
            }! 🏠`,
            {
              duration: 5000,
              position: 'bottom-right',
            }
          )
        }, index * 500)
      })

      setDisplayedPledgeIds(currentPledgeIds)
    }
  }, [recentPledges, displayedPledgeIds, hasInitialized])

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <TopPledgersTable />
        </div>
      </div>
    </section>
  )
}
