interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { height: 24, iconSize: 20 },
  md: { height: 32, iconSize: 28 },
  lg: { height: 40, iconSize: 36 },
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const { height, iconSize } = sizes[size]

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      role="img"
      aria-label="SmartSEOTools.ai"
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        {/* Magnifying glass circle */}
        <circle
          cx="13"
          cy="13"
          r="9"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Magnifying glass handle */}
        <line
          x1="20"
          y1="20"
          x2="28"
          y2="28"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* AI spark/star element inside the glass */}
        <path
          d="M13 7V10M13 16V19M10 13H7M19 13H16M10.5 10.5L8.5 8.5M15.5 10.5L17.5 8.5M10.5 15.5L8.5 17.5M15.5 15.5L17.5 17.5"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Center dot */}
        <circle cx="13" cy="13" r="2" fill="url(#logoGradient)" />
      </svg>
      <svg
        height={height}
        viewBox="0 0 180 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <title>SmartSEOTools.ai</title>
        <defs>
          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="20"
          fontWeight="700"
          fill="currentColor"
        >
          SmartSEOTools
        </text>
        <text
          x="134"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="20"
          fontWeight="700"
          fill="url(#aiGradient)"
        >
          .ai
        </text>
      </svg>
    </div>
  )
}
