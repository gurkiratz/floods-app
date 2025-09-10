'use client'

import { useQuery } from 'convex/react'
import { api } from '@floods-app/backend/convex/_generated/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Utility function to format Indian currency
const formatIndianCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export default function TopPledgersTable() {
  const topPledgers = useQuery(api.pledges.getTopPledgers, { limit: 5 }) ?? []
  const totalPledgers = useQuery(api.pledges.getAllPledges)?.length ?? 0

  if (topPledgers.length === 0) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-lg">
            0 people have pledged
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Be the first to make a pledge!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-lg">
          {totalPledgers} {totalPledgers === 1 ? 'person has' : 'people have'}{' '}
          pledged and counting
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {topPledgers.map((pledger, index) => (
            <div
              key={pledger._id}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-sm">{pledger.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm text-green-600 dark:text-green-400">
                  {formatIndianCurrency(pledger.pledgeAmount)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {pledger.housesToSponsor} house
                  {pledger.housesToSponsor !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          ))}

          {totalPledgers > 5 && (
            <div className="text-center pt-2 border-t">
              <p className="text-sm text-muted-foreground">
                ...and {totalPledgers - 5} more
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
