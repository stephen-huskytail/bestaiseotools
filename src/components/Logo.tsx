import { Sparkles } from 'lucide-react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { iconSize: 18, textClass: 'text-base' },
  md: { iconSize: 24, textClass: 'text-xl' },
  lg: { iconSize: 32, textClass: 'text-2xl' },
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const { iconSize, textClass } = sizes[size]

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      role="img"
      aria-label="SmartSEOTools.ai"
    >
      <div
        className="flex items-center justify-center rounded-lg p-1"
        style={{
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        }}
      >
        <Sparkles
          size={iconSize}
          className="text-white"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
      <span className={`flex items-baseline font-bold ${textClass}`}>
        <span>SmartSEOTools</span>
        <span
          className="font-bold"
          style={{
            background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          .ai
        </span>
      </span>
    </div>
  )
}
