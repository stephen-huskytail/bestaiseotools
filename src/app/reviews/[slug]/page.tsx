import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getReviewBySlug, getAllReviews, getRelatedReviews } from '../../../content'
import { markdownToHtml } from '../../../lib/markdown'
import { AffiliateButton, RatingStars, AuthorBio, ShareButtons, TableOfContents, RelatedReviews } from '../../../components'
import { JsonLd, generateReviewJsonLd, generateBreadcrumbJsonLd } from '../../../lib/jsonld'
import { calculateReadingTime } from '../../../lib/reading-time'
import { extractTocFromMarkdown } from '../../../lib/toc'

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
      images: review.featuredImage ? [{ url: review.featuredImage }] : undefined,
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
  const reviewUrl = `${siteUrl}/reviews/${review.slug}`
  const readingTime = calculateReadingTime(review.body || '')
  const tocItems = extractTocFromMarkdown(review.body || '')
  const relatedReviews = getRelatedReviews(slug, 3)
  const bodyHtml = review.body ? await markdownToHtml(review.body) : ''

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
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {review.author && (
              <span className="font-medium text-gray-700">{review.author.name}</span>
            )}
            {review.publishedAt && (
              <span>
                {new Date(review.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            {review.updatedAt && review.updatedAt !== review.publishedAt && (
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Updated {new Date(review.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            {readingTime > 0 && (
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            )}
          </div>
          <div className="mt-4">
            <ShareButtons url={reviewUrl} title={review.title} />
          </div>
        </header>

        {review.featuredImage && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={review.featuredImage}
                alt={review.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
              />
            </div>
          </div>
        )}

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="lg:col-span-2">
              {tocItems.length > 3 && (
                <div className="mb-8">
                  <TableOfContents items={tocItems} />
                </div>
              )}

              {bodyHtml && (
                <div
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-th:bg-gray-50 prose-td:border prose-td:border-gray-300 prose-td:p-2"
                  dangerouslySetInnerHTML={{ __html: bodyHtml }}
                />
              )}

              {review.verdict && (
                <section className="mt-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                  <h2 className="text-lg font-semibold text-blue-900">Our Verdict</h2>
                  <p className="mt-2 text-blue-800">{review.verdict}</p>
                </section>
              )}

              {review.author && (
                <section className="mt-12">
                  <h2 className="mb-4 text-lg font-semibold text-gray-900">About the Reviewer</h2>
                  <AuthorBio author={review.author} />
                </section>
              )}

              <div className="mt-8 border-t border-gray-200 pt-8">
                <ShareButtons url={reviewUrl} title={review.title} />
              </div>
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

          <RelatedReviews reviews={relatedReviews} />
        </div>
      </div>
    </>
  )
}
