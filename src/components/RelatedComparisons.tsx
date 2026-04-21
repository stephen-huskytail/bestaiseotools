import Link from 'next/link'
import Image from 'next/image'
import type { Comparison } from '../content/types'

interface RelatedComparisonsProps {
  comparisons: Comparison[]
}

export function RelatedComparisons({ comparisons }: RelatedComparisonsProps) {
  if (comparisons.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Related Comparisons</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comparisons.map((comparison) => (
          <article
            key={comparison.id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-lg"
          >
            {comparison.featuredImage && (
              <Link href={`/comparisons/${comparison.slug}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={comparison.featuredImage}
                    alt={comparison.title}
                    fill
                    className="rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
            )}
            <div className="p-4">
              {comparison.tools && comparison.tools.length > 0 && (
                <span className="text-xs font-medium uppercase tracking-wide text-blue-600">
                  {comparison.tools.map((t) => t.name).join(' vs ')}
                </span>
              )}
              <Link href={`/comparisons/${comparison.slug}`}>
                <h3 className="mt-1 font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600">
                  {comparison.title}
                </h3>
              </Link>
              {comparison.winner && (
                <p className="mt-2 text-sm text-gray-500">
                  Winner: <span className="font-medium text-blue-600">{comparison.winner.name}</span>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
