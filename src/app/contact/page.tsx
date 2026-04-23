import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Smart SEO Tools',
  description: 'Get in touch with the Smart SEO Tools team. We welcome your questions, feedback, and partnership inquiries.',
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Contact Us
      </h1>

      <div className="mt-8 space-y-6 text-gray-600">
        <p>
          We'd love to hear from you! Whether you have questions about our reviews,
          suggestions for tools to cover, or partnership inquiries, reach out anytime.
        </p>

        <div className="mt-8 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Get in Touch</h2>
          <p className="mt-2">
            Email us at:{' '}
            <a
              href="mailto:hello@smartseotools.ai"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              hello@smartseotools.ai
            </a>
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">Common Inquiries</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">Tool Reviews</h3>
            <p className="text-sm">
              Want us to review a specific AI SEO tool? Let us know which tools you'd like to see covered.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Corrections & Updates</h3>
            <p className="text-sm">
              If you notice any outdated information in our reviews, please reach out so we can keep our content accurate.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900">Partnerships</h3>
            <p className="text-sm">
              We're open to discussing partnerships with SEO tool providers. Please include details about your product in your message.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
