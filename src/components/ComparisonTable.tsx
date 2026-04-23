'use client'

import { useCallback, useEffect } from 'react'
import { RatingStars } from './RatingStars'
import { AffiliateButton } from './AffiliateButton'
import { trackEvent, ComparisonInteractionEvent } from '@/lib/analytics'

interface Tool {
  _id: string
  name: string
  slug: { current: string }
  logo?: string
  description?: string
  rating?: number
  pricing?: {
    hasFree?: boolean
    startingPrice?: number
    pricingModel?: string
  }
  affiliateLink?: string
}

interface ComparisonTableProps {
  tools: Tool[]
  criteria?: Array<{
    criterion: string
    description?: string
    winnerId?: string | 'tie'
    values?: Record<string, string>
  }>
  winner?: Tool | null
  comparisonSlug?: string
  className?: string
}

export function ComparisonTable({
  tools,
  criteria,
  winner,
  comparisonSlug,
  className = '',
}: ComparisonTableProps) {
  const trackInteraction = useCallback(
    (action: ComparisonInteractionEvent['action'], extra?: Partial<ComparisonInteractionEvent>) => {
      trackEvent('comparison_interaction', {
        action,
        comparison_slug: comparisonSlug,
        tool_names: tools.map((t) => t.name),
        ...extra,
      })
    },
    [comparisonSlug, tools]
  )

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 cursor-pointer hover:bg-gray-100"
              onClick={() => trackInteraction('sort', { sort_column: 'feature' })}
            >
              Feature
            </th>
            {tools.map((tool) => (
              <th key={tool._id} scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                    {tool.name.charAt(0)}
                  </div>
                  <span className={winner?._id === tool._id ? 'text-blue-600 font-semibold' : ''}>
                    {tool.name}
                    {winner?._id === tool._id && (
                      <span className="ml-1 text-xs text-blue-600">★ Winner</span>
                    )}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              Rating
            </td>
            {tools.map((tool) => (
              <td key={tool._id} className="px-6 py-4 text-center">
                {tool.rating ? (
                  <div className="flex justify-center">
                    <RatingStars rating={tool.rating} size="sm" />
                  </div>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              Starting Price
            </td>
            {tools.map((tool) => (
              <td key={tool._id} className="px-6 py-4 text-center text-sm text-gray-700">
                {tool.pricing?.startingPrice ? (
                  <span>${tool.pricing.startingPrice}/mo</span>
                ) : tool.pricing?.hasFree ? (
                  <span className="text-emerald-600 font-medium">Free</span>
                ) : (
                  <span className="text-gray-400">Contact</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              Pricing Model
            </td>
            {tools.map((tool) => (
              <td key={tool._id} className="px-6 py-4 text-center text-sm text-gray-700">
                {tool.pricing?.pricingModel || <span className="text-gray-400">N/A</span>}
              </td>
            ))}
          </tr>
          {criteria?.map((c, index) => {
            const hasEmptyCell = tools.some((tool) => {
              const value = c.values?.[tool._id]
              return !value || value === '-' || value.trim() === ''
            })

            if (hasEmptyCell && process.env.NODE_ENV === 'development') {
              console.warn(`[ComparisonTable] Empty cell in row "${c.criterion}"`)
            }

            return (
              <tr key={index}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  <div>{c.criterion}</div>
                  {c.description && (
                    <p className="text-xs text-gray-500 mt-1">{c.description}</p>
                  )}
                </td>
                {tools.map((tool) => {
                  const value = c.values?.[tool._id]
                  const isEmpty = !value || value === '-' || value.trim() === ''
                  const isWinner = c.winnerId === tool._id
                  const isTie = c.winnerId === 'tie'

                  return (
                    <td key={tool._id} className="px-6 py-4 text-center text-sm text-gray-700">
                      <div className="flex flex-col items-center gap-1">
                        {isEmpty ? (
                          <span className="text-gray-300">—</span>
                        ) : (
                          <span>{value}</span>
                        )}
                        {isWinner && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                            Winner
                          </span>
                        )}
                        {isTie && (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                            Tie
                          </span>
                        )}
                      </div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
          <tr className="bg-gray-50">
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
              Try It
            </td>
            {tools.map((tool) => (
              <td key={tool._id} className="px-6 py-4 text-center">
                {tool.affiliateLink ? (
                  <AffiliateButton
                    href={tool.affiliateLink}
                    toolName={tool.name}
                    size="sm"
                  />
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
