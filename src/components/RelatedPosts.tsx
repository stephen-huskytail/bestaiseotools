import Link from 'next/link'
import Image from 'next/image'
import type { Post } from '../content/types'

interface RelatedPostsProps {
  posts: Post[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Related Articles</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="p-4">
              {post.category && (
                <span className="text-xs font-medium uppercase tracking-wide text-blue-600">
                  {post.category.name}
                </span>
              )}
              <Link href={`/blog/${post.slug}`}>
                <h3 className="mt-1 font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
