import Link from 'next/link'
import Image from 'next/image'
import type { Review } from '../content/types'
import { RatingStars } from './RatingStars'

interface RelatedReviewsProps {
  reviews: Review[]
}

export function RelatedReviews({ reviews }: RelatedReviewsProps) {
  if (reviews.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Related Reviews</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-lg"
          >
            {review.featuredImage && (
              <Link href={`/reviews/${review.slug}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={review.featuredImage}
                    alt={review.title}
                    fill
                    className="rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
            )}
            <div className="p-4">
              {review.tool && (
                <span className="text-xs font-medium uppercase tracking-wide text-blue-600">
                  {review.tool.name}
                </span>
              )}
              <Link href={`/reviews/${review.slug}`}>
                <h3 className="mt-1 font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600">
                  {review.title}
                </h3>
              </Link>
              {review.ratings?.overall && (
                <div className="mt-2">
                  <RatingStars rating={review.ratings.overall} size="sm" />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
