'use client'

import { useQuery } from 'convex/react'
import { api } from '@floods-app/backend/convex/_generated/api'

interface ProgressBarProps {
  goal?: number
}

export default function ProgressBar({ goal = 500 }: ProgressBarProps) {
  const totalHouses = useQuery(api.pledges.getTotalHousesCount) ?? 0

  const progressPercentage = Math.min((totalHouses / goal) * 100, 100)

  return (
    <div className="space-y-4 mt-6">
      {/* Goal Text */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          {goal} houses goal
        </h3>
        <p className="text-lg text-white/90">
          <span className="font-semibold text-2xl">
            {totalHouses % 1 === 0
              ? totalHouses.toString()
              : totalHouses.toFixed(2)}
          </span>{' '}
          / {goal} houses secured
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto">
        <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="text-center mt-2">
          <span className="text-sm text-white/80 font-medium">
            {progressPercentage.toFixed(1)}% complete
          </span>
        </div>
      </div>
    </div>
  )
}
