import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../../content'
import { markdownToHtml } from '../../../lib/markdown'
import {
  FAQAccordion,
  AffiliateButton,
  AuthorBio,
  TableOfContents,
  ShareButtons,
  RelatedPosts,
} from '../../../components'
import {
  JsonLd,
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from '../../../lib/jsonld'
import { calculateReadingTime } from '../../../lib/reading-time'
import { extractTocFromMarkdown } from '../../../lib/toc'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} - Smart SEO Tools`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://smartseotools.ai'
  const postUrl = `${siteUrl}/blog/${post.slug}`
  const readingTime = calculateReadingTime(post.body || '')
  const tocItems = extractTocFromMarkdown(post.body || '')
  const relatedPosts = getRelatedPosts(slug, 3)
  const bodyHtml = post.body ? await markdownToHtml(post.body) : ''

  const articleJsonLd = generateArticleJsonLd({
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      name: post.author?.name || 'SmartSEOTools Team',
    },
    publisher: {
      name: 'Smart SEO Tools',
      logo: `${siteUrl}/logo.png`,
    },
  })

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: siteUrl },
    { name: 'Blog', url: `${siteUrl}/blog` },
    { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
  ])

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {post.faq && post.faq.length > 0 && (
        <JsonLd data={generateFAQJsonLd({ items: post.faq })} />
      )}

      <div className="bg-white">
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
            {post.category && (
              <>
                <li>/</li>
                <li>
                  <Link
                    href={`/categories/${post.category.slug}`}
                    className="hover:text-blue-600"
                  >
                    {post.category.name}
                  </Link>
                </li>
              </>
            )}
          </ol>
        </nav>

        <header className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
          {post.excerpt && (
            <p className="mt-4 text-xl text-gray-600">{post.excerpt}</p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {post.author && (
              <span className="font-medium text-gray-700">{post.author.name}</span>
            )}
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Updated {new Date(post.updatedAt).toLocaleDateString('en-US', {
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
            <ShareButtons url={postUrl} title={post.title} />
          </div>
        </header>

        {post.featuredImage && (
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              />
            </div>
          </div>
        )}

        <div className="mx-auto max-w-4xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          {tocItems.length > 3 && (
            <div className="mb-8">
              <TableOfContents items={tocItems} />
            </div>
          )}

          <article>
            {bodyHtml && (
              <div
                className="prose max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-th:bg-gray-50 prose-td:border prose-td:border-gray-300 prose-td:p-2"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            )}

            {post.faq && post.faq.length > 0 && (
              <section className="mt-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion items={post.faq} />
              </section>
            )}

            {post.relatedTools && post.relatedTools.length > 0 && (
              <section className="mt-12 rounded-xl bg-gray-50 p-6">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                  Tools Mentioned in This Article
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {post.relatedTools.map((tool) => (
                    <div
                      key={tool.id}
                      className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                          {tool.name.charAt(0)}
                        </div>
                        <Link
                          href={`/tools/${tool.slug}`}
                          className="font-medium text-gray-900 hover:text-blue-600"
                        >
                          {tool.name}
                        </Link>
                      </div>
                      {tool.affiliateLink && (
                        <AffiliateButton
                          href={tool.affiliateLink}
                          toolName={tool.name}
                          articleType="blog"
                          size="sm"
                          variant="secondary"
                        >
                          Try It
                        </AffiliateButton>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {post.author && (
              <section className="mt-12">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">About the Author</h2>
                <AuthorBio author={post.author} />
              </section>
            )}

            <div className="mt-8 border-t border-gray-200 pt-8">
              <ShareButtons url={postUrl} title={post.title} />
            </div>
          </article>

          <RelatedPosts posts={relatedPosts} />
        </div>
      </div>
    </>
  )
}
