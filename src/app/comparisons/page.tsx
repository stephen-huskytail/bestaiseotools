import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getAllComparisons } from '../../content'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Tool Comparisons - Smart SEO Tools',
  description: 'Side-by-side comparisons of popular AI SEO tools to help you choose the best option.',
}

export default async function ComparisonsPage() {
  const comparisons = getAllComparisons()

  return (
    <div className="bg-white">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Tool Comparisons</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Side-by-side comparisons to help you find the best AI SEO tool for your needs.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {comparisons.length > 0 ? (
          <div className="space-y-8">
            {comparisons.map((comparison) => (
              <article
                key={comparison.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-lg md:flex-row"
              >
                {comparison.featuredImage && (
                  <Link href={`/comparisons/${comparison.slug}`} className="block md:w-72 shrink-0">
                    <div className="relative aspect-[16/9] md:h-full overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl">
                      <Image
                        src={comparison.featuredImage}
                        alt={comparison.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 288px"
                      />
                    </div>
                  </Link>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <Link href={`/comparisons/${comparison.slug}`}>
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                      {comparison.title}
                    </h2>
                  </Link>
                  {comparison.tools && comparison.tools.length > 0 && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-sm text-gray-500">Comparing:</span>
                      <div className="flex -space-x-2">
                        {comparison.tools.slice(0, 4).map((tool) => (
                          <div
                            key={tool.id}
                            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-blue-600 text-xs font-bold"
                            title={tool.name}
                          >
                            {tool.name.charAt(0)}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {comparison.tools.map(t => t.name).join(' vs ')}
                      </span>
                    </div>
                  )}
                  {comparison.excerpt && (
                    <p className="mt-3 flex-1 text-gray-600 line-clamp-2">
                      {comparison.excerpt}
                    </p>
                  )}
                  {comparison.winner && (
                    <p className="mt-3 text-sm">
                      <span className="text-gray-500">Winner:</span>{' '}
                      <span className="font-medium text-blue-600">{comparison.winner.name}</span>
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between text-sm">
                    {comparison.author && (
                      <span className="text-gray-500">{comparison.author.name}</span>
                    )}
                    {comparison.publishedAt && (
                      <span className="text-gray-400">
                        {new Date(comparison.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-500">No comparisons yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
