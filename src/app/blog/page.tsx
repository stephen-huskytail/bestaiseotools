import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getAllPosts } from '../../content'
import { Pagination } from '../../components'
import { calculateReadingTime } from '../../lib/reading-time'

export const revalidate = 3600

const POSTS_PER_PAGE = 9

export const metadata: Metadata = {
  title: 'Blog - SmartSEOTools.ai',
  description: 'Tips, guides, and insights about AI-powered SEO tools and strategies.',
  alternates: {
    canonical: '/blog',
  },
}

interface Props {
  searchParams: Promise<{ page?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams
  const currentPage = Math.max(1, parseInt(params.page || '1', 10))
  const allPosts = getAllPosts()
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const posts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <div className="bg-white">
      <header className="bg-blue-700 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-white">Blog</h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-blue-100">
            Tips, guides, and insights to help you master AI-powered SEO.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-lg"
              >
                {post.featuredImage && (
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  {post.category && (
                    <Link
                      href={`/categories/${post.category.slug}`}
                      className="text-xs font-medium uppercase tracking-wide text-blue-600 hover:underline"
                    >
                      {post.category.name}
                    </Link>
                  )}
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="mt-2 font-semibold text-gray-900 group-hover:text-blue-600">
                      {post.title}
                    </h2>
                  </Link>
                  {post.excerpt && (
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      {post.publishedAt && (
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      )}
                      {post.body && (
                        <span>{calculateReadingTime(post.body)} min</span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-500">No blog posts yet. Check back soon!</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/blog"
            />
          </div>
        )}
      </div>
    </div>
  )
}
