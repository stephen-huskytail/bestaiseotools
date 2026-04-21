import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { getPostBySlug, getAllPosts } from '../../../content'
import { FAQAccordion, AffiliateButton } from '../../../components'
import {
  JsonLd,
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from '../../../lib/jsonld'

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
    title: `${post.title} - Best AI SEO Tools`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
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

  const articleJsonLd = generateArticleJsonLd({
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      name: post.author?.name || 'SmartSEOTools Team',
    },
    publisher: {
      name: 'Best AI SEO Tools',
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
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {post.author && (
              <span className="text-sm text-gray-600">{post.author.name}</span>
            )}
            {post.publishedAt && (
              <span className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        </header>

        <article className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          {post.body && (
            <div className="prose prose-lg max-w-none">
              {post.body.split('\n').map((paragraph, index) => {
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
        </article>
      </div>
    </>
  )
}
