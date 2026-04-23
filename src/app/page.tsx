import Link from 'next/link'
import { getFeaturedTools, getAllCategories, getLatestReviews, getAllTools, getAllReviews, getAllComparisons } from '../content'
import { RatingStars, ToolLogo } from '../components'

export const revalidate = 3600

export default async function Home() {
  const featuredTools = getFeaturedTools()
  const categories = getAllCategories()
  const latestReviews = getLatestReviews(3)
  const allTools = getAllTools()
  const allReviews = getAllReviews()
  const allComparisons = getAllComparisons()

  const stats = [
    { label: 'AI SEO Tools', value: allTools.length.toString() + '+' },
    { label: 'Expert Reviews', value: allReviews.length.toString() + '+' },
    { label: 'Tool Comparisons', value: allComparisons.length.toString() + '+' },
    { label: 'Hours of Research', value: '500+' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-blue-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400"></span>
              </span>
              Updated for 2026
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find the Best{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI SEO Tools
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Discover and compare the most powerful AI-driven SEO tools to boost your
              rankings, save time, and grow your organic traffic.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500 hover:shadow-blue-500/40"
              >
                Browse All Tools
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/comparisons"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-slate-500 hover:bg-slate-700/50"
              >
                Compare Tools
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 text-center backdrop-blur sm:p-6">
                <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="border-b border-gray-100 bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500">
            Trusted by SEO professionals worldwide
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {/* Trust badges - using text for now, can be replaced with logos */}
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-600">Independently Reviewed</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-600">Hands-On Testing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-600">Updated Monthly</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-600">No Sponsored Rankings</span>
            </div>
          </div>
        </div>
      </section>

      {featuredTools.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Featured AI SEO Tools</h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Our top picks based on features, value, and real-world performance
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredTools.map((tool, index) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.slug}`}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  {index === 0 && (
                    <div className="absolute -top-3 left-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Top Pick
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-gray-50 p-2">
                      <ToolLogo name={tool.name} website={tool.website} size="md" />
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
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 line-clamp-2">
                    {tool.description}
                  </p>
                  {tool.rating && (
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`h-4 w-4 ${i < Math.round(tool.rating!) ? 'fill-current' : 'fill-gray-200'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {tool.rating.toFixed(1)}
                      </span>
                    </div>
                  )}
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Read review
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 hover:text-blue-700"
              >
                View all {allTools.length} tools
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {categories.length > 0 && (
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Browse by Category</h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Find the perfect tool for your specific SEO needs
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-5 text-center transition-all duration-200 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{category.name}</h3>
                  {category.description && (
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
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
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Latest Reviews</h2>
                <p className="mt-2 text-gray-600">In-depth analysis from our expert team</p>
              </div>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
              >
                View all reviews
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestReviews.map((review) => (
                <Link
                  key={review.id}
                  href={`/reviews/${review.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  {review.tool && (
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-gray-50 p-1.5">
                        <ToolLogo name={review.tool.name} website={review.tool.website} size="sm" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{review.tool.name}</span>
                    </div>
                  )}
                  <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-blue-600">
                    {review.title}
                  </h3>
                  {review.ratings?.overall && (
                    <div className="mt-3">
                      <RatingStars rating={review.ratings.overall} size="sm" />
                    </div>
                  )}
                  {review.excerpt && (
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-2">{review.excerpt}</p>
                  )}
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Read full review
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to supercharge your SEO?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Browse our complete collection of AI SEO tools and find the perfect fit for your workflow.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
            >
              Explore All Tools
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/comparisons"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Compare Tools Side-by-Side
            </Link>
          </div>
        </div>
      </section>

      {featuredTools.length === 0 && categories.length === 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-gray-600">
                Content coming soon. Add tools and categories in src/content/data/.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
