import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { getReviewBySlug, getAllReviews } from '../../../content'
import { AffiliateButton, RatingStars } from '../../../components'
import { JsonLd, generateReviewJsonLd, generateBreadcrumbJsonLd } from '../../../lib/jsonld'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const reviews = getAllReviews()
  return reviews.map((review) => ({ slug: review.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const review = getReviewBySlug(slug)
  if (!review) return {}

  return {
    title: `${review.title} - Smart SEO Tools`,
    description: review.excerpt,
    openGraph: {
      title: review.title,
      description: review.excerpt,
      type: 'article',
    },
  }
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params
  const review = getReviewBySlug(slug)

  if (!review || !review.tool) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://smartseotools.ai'

  const reviewJsonLd = generateReviewJsonLd({
    name: review.title,
    description: review.excerpt || '',
    itemReviewed: {
      name: review.tool.name,
      url: review.tool.website,
    },
    reviewRating: {
      ratingValue: review.ratings?.overall || 0,
    },
    author: {
      name: review.author?.name || 'SmartSEOTools Team',
    },
    datePublished: review.publishedAt,
  })

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: siteUrl },
    { name: 'Reviews', url: `${siteUrl}/reviews` },
    { name: review.title, url: `${siteUrl}/reviews/${review.slug}` },
  ])

  const ratingCategories = [
    { key: 'features', label: 'Features' },
    { key: 'easeOfUse', label: 'Ease of Use' },
    { key: 'valueForMoney', label: 'Value for Money' },
    { key: 'support', label: 'Support' },
  ] as const

  return (
    <>
      <JsonLd data={reviewJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="bg-white">
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/reviews" className="hover:text-blue-600">Reviews</Link></li>
            <li>/</li>
            <li className="text-gray-900">{review.tool.name}</li>
          </ol>
        </nav>

        <header className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">{review.title}</h1>
          {review.excerpt && (
            <p className="mt-4 text-xl text-gray-600">{review.excerpt}</p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {review.author && (
              <span className="text-sm text-gray-600">By {review.author.name}</span>
            )}
            {review.publishedAt && (
              <span className="text-sm text-gray-500">
                {new Date(review.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="lg:col-span-2">
              {review.body && (
                <div className="prose prose-lg max-w-none">
                  {review.body.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index}>{paragraph.slice(3)}</h2>
                    }
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={index}>{paragraph.slice(4)}</h3>
                    }
                    if (paragraph.startsWith('- ')) {
                      return <li key={index}>{paragraph.slice(2)}</li>
                    }
                    if (paragraph.trim()) {
                      return <p key={index}>{paragraph}</p>
                    }
                    return null
                  })}
                </div>
              )}

              {review.verdict && (
                <section className="mt-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h2 className="text-lg font-semibold text-blue-900">Our Verdict</h2>
                  <p className="mt-2 text-blue-800">{review.verdict}</p>
                </section>
              )}
            </article>

            <aside className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-xl font-bold">
                    {review.tool.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.tool.name}</h3>
                    {review.ratings?.overall && (
                      <RatingStars rating={review.ratings.overall} size="md" />
                    )}
                  </div>
                </div>

                {review.ratings && (
                  <div className="mt-6 space-y-3">
                    {ratingCategories.map(({ key, label }) => (
                      review.ratings?.[key] !== undefined && (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{label}</span>
                          <RatingStars rating={review.ratings[key]!} size="sm" />
                        </div>
                      )
                    ))}
                  </div>
                )}

                {review.tool.affiliateLink && (
                  <AffiliateButton
                    href={review.tool.affiliateLink}
                    toolName={review.tool.name}
                    articleType="review"
                    className="mt-6 w-full"
                  />
                )}
              </div>

              <Link
                href={`/tools/${review.tool.slug}`}
                className="block rounded-lg border border-gray-200 p-4 text-center text-sm font-medium text-blue-600 hover:bg-gray-50"
              >
                View Full Tool Profile →
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
