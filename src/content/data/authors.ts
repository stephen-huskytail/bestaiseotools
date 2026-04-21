import type { Author } from '../types'

export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'AI Tools Team',
    slug: 'ai-tools-team',
    bio: 'Our team of AI and SEO experts reviews and compares the latest tools to help you make informed decisions.',
    role: 'Editorial Team',
  },
]

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id)
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}
