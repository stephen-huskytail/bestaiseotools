import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - SmartSEOTools.ai',
  description: 'Learn about SmartSEOTools.ai and our mission to help businesses find the best AI-powered SEO tools.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        About SmartSEOTools.ai
      </h1>

      <div className="mt-8 space-y-6 text-gray-600">
        <p>
          SmartSEOTools.ai is your trusted resource for discovering, comparing, and evaluating
          the best AI-powered SEO tools on the market. We help digital marketers, SEO professionals,
          and business owners make informed decisions about the tools they use to grow their online presence.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Our Mission</h2>
        <p>
          With the rapid evolution of AI in search engine optimization, choosing the right tools
          can be overwhelming. Our mission is to cut through the noise by providing honest,
          in-depth reviews and comparisons that help you find the perfect tools for your needs and budget.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">What We Cover</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>AI-powered content optimization tools</li>
          <li>Keyword research and analysis platforms</li>
          <li>Backlink analysis and link building tools</li>
          <li>Technical SEO auditing software</li>
          <li>Rank tracking and reporting solutions</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Our Approach</h2>
        <p>
          Every tool we review is tested hands-on by our team. We evaluate real-world performance,
          ease of use, pricing value, and how well each tool delivers on its promises.
          Our comparisons are designed to highlight the key differences that matter most for your specific use case.
        </p>
      </div>
    </div>
  )
}
