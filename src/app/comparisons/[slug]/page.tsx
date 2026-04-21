import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getComparisonBySlug, getAllComparisons } from '../../../content'
import { ComparisonTable, AffiliateButton } from '../../../components'
import { JsonLd, generateBreadcrumbJsonLd } from '../../../lib/jsonld'

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

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: siteUrl },
    { name: 'Comparisons', url: `${siteUrl}/comparisons` },
    { name: comparison.title, url: `${siteUrl}/comparisons/${comparison.slug}` },
  ])

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

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
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {comparison.author && (
              <span className="text-sm text-gray-600">By {comparison.author.name}</span>
            )}
            {comparison.publishedAt && (
              <span className="text-sm text-gray-500">
                {new Date(comparison.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        </header>

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

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          {comparison.tools && comparison.tools.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Quick Comparison</h2>
              <ComparisonTable
                tools={comparison.tools.map(t => ({
                  _id: t.id,
                  name: t.name,
                  slug: { current: t.slug },
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
            <section className="mb-12 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-blue-200 text-blue-700 text-2xl font-bold">
                  {comparison.winner.name.charAt(0)}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-medium uppercase tracking-wide text-blue-600">Our Pick</p>
                  <h3 className="text-2xl font-bold text-gray-900">{comparison.winner.name}</h3>
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

          {comparison.body && (
            <article className="prose prose-lg mx-auto max-w-4xl">
              {comparison.body.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index}>{paragraph.slice(3)}</h2>
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index}>{paragraph.slice(4)}</h3>
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={index}>{paragraph.slice(2)}</li>
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index}><strong>{paragraph.slice(2, -2)}</strong></p>
                }
                if (paragraph.trim()) {
                  return <p key={index}>{paragraph}</p>
                }
                return null
              })}
            </article>
          )}

          <section className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Explore These Tools</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {comparison.tools?.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-lg border border-gray-200 p-4 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                      {tool.name.charAt(0)}
                    </div>
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
        </div>
      </div>
    </>
  )
}
