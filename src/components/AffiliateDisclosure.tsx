interface AffiliateDisclosureProps {
  className?: string
}

export function AffiliateDisclosure({ className = '' }: AffiliateDisclosureProps) {
  return (
    <p className={`text-sm text-gray-500 ${className}`}>
      <span className="font-medium">Affiliate disclosure:</span> Some links on this page are affiliate links. We may earn a commission if you make a purchase, at no extra cost to you. This does not influence our recommendations.
    </p>
  )
}
