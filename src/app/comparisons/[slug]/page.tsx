import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getComparisonBySlug, getAllComparisons, getRelatedComparisons } from '../../../content'
import { markdownToHtml } from '../../../lib/markdown'
import { ComparisonTable, AffiliateButton, AuthorBio, ShareButtons, StickyTableOfContents, RelatedComparisons, WinnerCalloutCompact, MidArticleCTA, FAQAccordion, ToolLogo } from '../../../components'
import { JsonLd, generateBreadcrumbJsonLd, generateFAQJsonLd } from '../../../lib/jsonld'
import { calculateReadingTime } from '../../../lib/reading-time'
import { extractTocFromMarkdown } from '../../../lib/toc'
import { extractFaqsFromMarkdown, countWords } from '../../../lib/faq'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const comparisons = getAllComparisons()
  return comparisons.map((comparison) => ({ slug: comparison.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const comparison = getComparisonBySlug(slug)
  if (!comparison) return {}

  return {
    title: `${comparison.title} - Smart SEO Tools`,
    description: comparison.excerpt,
    alternates: {
      canonical: `/comparisons/${slug}`,
    },
    openGraph: {
      title: comparison.title,
      description: comparison.excerpt,
      type: 'article',
      images: comparison.featuredImage ? [{ url: comparison.featuredImage }] : undefined,
    },
  }
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params
  const comparison = getComparisonBySlug(slug)

  if (!comparison) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://smartseotools.ai'
  const comparisonUrl = `${siteUrl}/comparisons/${comparison.slug}`
  const readingTime = calculateReadingTime(comparison.body || '')
  const tocItems = extractTocFromMarkdown(comparison.body || '')
  const relatedComparisons = getRelatedComparisons(slug, 3)
  const bodyHtml = comparison.body ? await markdownToHtml(comparison.body) : ''

  const wordCount = countWords(comparison.body || '')
  const h2Count = tocItems.filter((item) => item.level === 2).length
  const showToc = wordCount >= 1500 || h2Count >= 3

  const faqs = comparison.faqs || extractFaqsFromMarkdown(comparison.body || '')

  const otherTool = comparison.tools?.find((t) => t.id !== comparison.winnerId)

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: siteUrl },
    { name: 'Comparisons', url: `${siteUrl}/comparisons` },
    { name: comparison.title, url: `${siteUrl}/comparisons/${comparison.slug}` },
  ])

  const faqJsonLd = faqs.length > 0 ? generateFAQJsonLd({ items: faqs }) : null

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <div className="bg-white">
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/comparisons" className="hover:text-blue-600">Comparisons</Link></li>
            <li>/</li>
            <li className="text-gray-900 truncate max-w-[200px]">{comparison.title}</li>
          </ol>
        </nav>

        <header className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">{comparison.title}</h1>
          {comparison.excerpt && (
            <p className="mt-4 text-xl text-gray-600">{comparison.excerpt}</p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {comparison.author && (
              <span className="font-medium text-gray-700">{comparison.author.name}</span>
            )}
            {comparison.publishedAt && (
              <span>
                {new Date(comparison.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            {comparison.updatedAt && comparison.updatedAt !== comparison.publishedAt && (
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Updated {new Date(comparison.updatedAt).toLocaleDateString('en-US', {
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
            <ShareButtons url={comparisonUrl} title={comparison.title} />
          </div>
        </header>

        {comparison.winner && (
          <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
            <WinnerCalloutCompact
              winner={{
                name: comparison.winner.name,
                affiliateLink: comparison.winner.affiliateLink,
                logo: comparison.winner.logo,
              }}
              verdict={comparison.winnerReason || `${comparison.winner.name} is our recommended choice for most users.`}
              bullets={comparison.winnerBullets}
              chooseOtherIf={comparison.chooseOtherIf}
              otherTool={otherTool ? {
                name: otherTool.name,
                affiliateLink: otherTool.affiliateLink,
              } : undefined}
              comparisonSlug={comparison.slug}
            />
          </div>
        )}

        {comparison.featuredImage && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={comparison.featuredImage}
                alt={comparison.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
              />
            </div>
          </div>
        )}

        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          {comparison.tools && comparison.tools.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Quick Comparison</h2>
              <ComparisonTable
                tools={comparison.tools.map(t => ({
                  _id: t.id,
                  name: t.name,
                  slug: { current: t.slug },
                  website: t.website,
                  description: t.description,
                  rating: t.rating,
                  pricing: t.pricing,
                  affiliateLink: t.affiliateLink,
                }))}
                criteria={comparison.comparisonTable}
                winner={comparison.winner ? {
                  _id: comparison.winner.id,
                  name: comparison.winner.name,
                  slug: { current: comparison.winner.slug },
                } : undefined}
                comparisonSlug={comparison.slug}
              />
            </section>
          )}

          {comparison.winner && (
            <section className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <ToolLogo name={comparison.winner.name} website={comparison.winner.website} size="lg" />
                <div className="text-center sm:text-left">
                  <p className="text-xs font-medium uppercase tracking-wide text-blue-600">Our Pick</p>
                  <h3 className="text-xl font-bold text-gray-900">{comparison.winner.name}</h3>
                  {comparison.winnerReason && (
                    <p className="mt-2 text-gray-700">{comparison.winnerReason}</p>
                  )}
                </div>
                {comparison.winner.affiliateLink && (
                  <div className="ml-auto">
                    <AffiliateButton
                      href={comparison.winner.affiliateLink}
                      toolName={comparison.winner.name}
                      articleType="comparison"
                      size="lg"
                    />
                  </div>
                )}
              </div>
            </section>
          )}

          <div className="flex flex-col lg:flex-row lg:gap-8">
            {showToc && (
              <aside className="mb-8 lg:mb-0 lg:w-64 lg:flex-shrink-0">
                <StickyTableOfContents items={tocItems} />
              </aside>
            )}

            <div className="flex-1">
              {bodyHtml && (
                <article
                  className="prose max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-th:bg-gray-50 prose-td:border prose-td:border-gray-300 prose-td:p-2"
                  dangerouslySetInnerHTML={{ __html: bodyHtml }}
                />
              )}

              {comparison.tools && comparison.tools.length > 0 && (
                <MidArticleCTA
                  tools={comparison.tools.map(t => ({ name: t.name, affiliateLink: t.affiliateLink }))}
                  winner={comparison.winner ? { name: comparison.winner.name, affiliateLink: comparison.winner.affiliateLink } : undefined}
                  className="my-8"
                />
              )}

              {faqs.length > 0 && (
                <section className="mt-12" id="faq">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqs} />
                  {comparison.tools && comparison.tools.length > 0 && (
                    <MidArticleCTA
                      tools={comparison.tools.map(t => ({ name: t.name, affiliateLink: t.affiliateLink }))}
                      winner={comparison.winner ? { name: comparison.winner.name, affiliateLink: comparison.winner.affiliateLink } : undefined}
                      className="mt-8"
                    />
                  )}
                </section>
              )}
            </div>
          </div>

          {comparison.author && (
            <section className="mt-12 mx-auto max-w-4xl">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">About the Author</h2>
              <AuthorBio author={comparison.author} />
            </section>
          )}

          <div className="mt-8 mx-auto max-w-4xl border-t border-gray-200 pt-8">
            <ShareButtons url={comparisonUrl} title={comparison.title} />
          </div>

          <section className="mt-12">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Individual Tool Reviews</h2>
            <p className="mb-6 text-gray-600">Read our in-depth standalone reviews to learn more about each tool.</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {comparison.tools?.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-lg border border-gray-200 p-4 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <ToolLogo name={tool.name} website={tool.website} size="md" />
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {tool.name}
                      </h3>
                      {tool.rating && (
                        <p className="text-sm text-yellow-500">
                          {'★'.repeat(Math.round(tool.rating))} {tool.rating.toFixed(1)}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <RelatedComparisons comparisons={relatedComparisons} />
        </div>
      </div>
    </>
  )
}
