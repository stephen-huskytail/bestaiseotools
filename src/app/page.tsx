import Link from 'next/link'
import { getFeaturedTools, getAllCategories, getLatestReviews } from '../content'
import { RatingStars } from '../components'

export const revalidate = 3600

export default async function Home() {
  const featuredTools = getFeaturedTools()
  const categories = getAllCategories()
  const latestReviews = getLatestReviews(3)

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find the Best{' '}
            <span className="text-blue-600">AI SEO Tools</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Discover and compare the most powerful AI-driven SEO tools to boost your
            rankings, save time, and grow your organic traffic.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/tools"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Browse All Tools
            </Link>
            <Link
              href="/comparisons"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Compare Tools
            </Link>
          </div>
        </div>
      </section>

      {featuredTools.length > 0 && (
        <section className="bg-gray-50 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900">Featured Tools</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                      {tool.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {tool.name}
                      </h3>
                      {tool.category && (
                        <p className="text-sm text-gray-500">{tool.category.name}</p>
                      )}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                    {tool.description}
                  </p>
                  {tool.rating && (
                    <div className="mt-4 flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium text-gray-700">
                        {tool.rating.toFixed(1)}
                      </span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {categories.length > 0 && (
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900">Browse by Category</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="rounded-lg border border-gray-200 p-4 text-center transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                  {category.description && (
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {category.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {latestReviews.length > 0 && (
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Latest Reviews</h2>
              <Link href="/reviews" className="text-sm font-medium text-blue-600 underline hover:text-blue-800">
                View all reviews →
              </Link>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {latestReviews.map((review) => (
                <Link
                  key={review.id}
                  href={`/reviews/${review.slug}`}
                  className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  {review.tool && (
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 font-bold text-sm">
                        {review.tool.name.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-500">{review.tool.name}</span>
                    </div>
                  )}
                  <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-blue-600">
                    {review.title}
                  </h3>
                  {review.ratings?.overall && (
                    <div className="mt-2">
                      <RatingStars rating={review.ratings.overall} size="sm" />
                    </div>
                  )}
                  {review.excerpt && (
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{review.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredTools.length === 0 && categories.length === 0 && (
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-gray-500">
              Content coming soon. Add tools and categories in src/content/data/.
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
