'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ToolLogoProps {
  name: string
  logo?: string
  website?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-14 w-14',
  xl: 'h-16 w-16',
}

const imageSizes = {
  sm: 40,
  md: 48,
  lg: 56,
  xl: 64,
}

function extractDomain(url?: string): string | null {
  if (!url) return null
  try {
    const { hostname } = new URL(url)
    return hostname.replace(/^www\./, '')
  } catch {
    return null
  }
}

export function ToolLogo({ name, logo, website, size = 'md', className = '' }: ToolLogoProps) {
  const [imgError, setImgError] = useState(false)
  const domain = extractDomain(website)
  const clearbitUrl = domain ? `https://logo.clearbit.com/${domain}` : null
  const imgSrc = logo || clearbitUrl

  const sizeClass = sizeClasses[size]
  const imgSize = imageSizes[size]

  if (!imgSrc || imgError) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold ${sizeClass} ${className}`}
      >
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-lg bg-white ${sizeClass} ${className}`}>
      <Image
        src={imgSrc}
        alt={`${name} logo`}
        width={imgSize}
        height={imgSize}
        className="h-full w-full object-contain p-1"
        onError={() => setImgError(true)}
        unoptimized
      />
    </div>
  )
}
