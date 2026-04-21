'use client'

import { AffiliateButton } from './AffiliateButton'

interface MidArticleCTAProps {
  tools: Array<{
    name: string
    affiliateLink?: string
  }>
  winner?: {
    name: string
    affiliateLink?: string
  }
  className?: string
}

export function MidArticleCTA({ tools, winner, className = '' }: MidArticleCTAProps) {
  const primaryTool = winner || tools[0]
  const secondaryTool = tools.find((t) => t.name !== primaryTool?.name)

  if (!primaryTool?.affiliateLink) return null

  return (
    <div className={`rounded-lg border border-gray-200 bg-gray-50 p-6 ${className}`}>
      <p className="mb-4 text-center text-sm font-medium text-gray-700">
        Ready to try {winner ? 'our winner' : 'these tools'}?
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <AffiliateButton
          href={primaryTool.affiliateLink}
          toolName={primaryTool.name}
          articleType="comparison"
          size="md"
        />
        {secondaryTool?.affiliateLink && (
          <AffiliateButton
            href={secondaryTool.affiliateLink}
            toolName={secondaryTool.name}
            articleType="comparison"
            variant="secondary"
            size="md"
          />
        )}
      </div>
      <p className="mt-3 text-center text-xs text-gray-500">
        Affiliate disclosure: We may earn a commission at no extra cost to you.
      </p>
    </div>
  )
}
