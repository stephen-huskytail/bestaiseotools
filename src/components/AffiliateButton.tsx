'use client'

import { useCallback } from 'react'

interface AffiliateButtonProps {
  href: string
  toolName: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
}

export function AffiliateButton({
  href,
  toolName,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}: AffiliateButtonProps) {
  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: toolName,
        affiliate_url: href,
      })
    }
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.capture('affiliate_click', {
        tool_name: toolName,
        affiliate_url: href,
      })
    }
  }, [href, toolName])

  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors'

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children || `Try ${toolName}`}
      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    posthog?: { capture: (event: string, properties?: Record<string, unknown>) => void }
  }
}
