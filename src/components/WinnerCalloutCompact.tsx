'use client'

import { AffiliateButton } from './AffiliateButton'

interface WinnerCalloutCompactProps {
  winner: {
    name: string
    affiliateLink?: string
    logo?: string
  }
  verdict: string
  bullets?: string[]
  chooseOtherIf?: string
  otherTool?: {
    name: string
    affiliateLink?: string
  }
  comparisonSlug?: string
}

export function WinnerCalloutCompact({
  winner,
  verdict,
  bullets,
  chooseOtherIf,
  otherTool,
  comparisonSlug,
}: WinnerCalloutCompactProps) {
  return (
    <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white text-2xl font-bold shadow-lg">
          {winner.logo ? (
            <img src={winner.logo} alt={winner.name} className="h-10 w-10 object-contain" />
          ) : (
            winner.name.charAt(0)
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
              Our Pick
            </span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-gray-900">{winner.name}</h3>
          <p className="mt-2 text-gray-700">{verdict}</p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-3 space-y-1">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {chooseOtherIf && otherTool && (
            <p className="mt-3 text-sm text-gray-500">
              <span className="font-medium">Choose {otherTool.name} if:</span> {chooseOtherIf}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            {winner.affiliateLink && (
              <AffiliateButton
                href={winner.affiliateLink}
                toolName={winner.name}
                articleType="comparison"
                size="md"
              />
            )}
            {otherTool?.affiliateLink && (
              <AffiliateButton
                href={otherTool.affiliateLink}
                toolName={otherTool.name}
                articleType="comparison"
                variant="secondary"
                size="md"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
