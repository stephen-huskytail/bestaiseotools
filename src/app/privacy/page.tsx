import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Smart SEO Tools',
  description: 'Learn how Smart SEO Tools collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: April 2026</p>

      <div className="mt-8 space-y-6 text-gray-600">
        <p>
          This Privacy Policy describes how Smart SEO Tools ("we", "us", or "our") collects,
          uses, and shares information when you visit our website.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Information We Collect</h2>
        <p>
          We collect information automatically when you visit our site, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Device and browser information</li>
          <li>IP address and approximate location</li>
          <li>Pages visited and time spent on our site</li>
          <li>Referring website or source</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">How We Use Information</h2>
        <p>We use this information to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Analyze site traffic and usage patterns</li>
          <li>Improve our content and user experience</li>
          <li>Understand which reviews and tools interest our visitors</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Cookies and Analytics</h2>
        <p>
          We use Google Analytics and similar services to understand how visitors use our site.
          These services may use cookies to collect information about your browsing behavior.
          You can opt out of Google Analytics by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Affiliate Links</h2>
        <p>
          Some links on our site are affiliate links. When you click these links and make a purchase,
          we may earn a commission at no additional cost to you. This helps support our independent reviews.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Third-Party Links</h2>
        <p>
          Our site contains links to third-party websites. We are not responsible for the privacy
          practices of these external sites and encourage you to review their privacy policies.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a
            href="mailto:hello@smartseotools.ai"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            hello@smartseotools.ai
          </a>.
        </p>
      </div>
    </div>
  )
}
