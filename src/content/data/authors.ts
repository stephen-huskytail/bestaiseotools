import type { Author } from '../types'

export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'Marcus Chen',
    slug: 'marcus-chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Former SEO Director at a Fortune 500 e-commerce company. 12 years optimizing content for search, now testing every AI tool so you don\'t have to.',
    role: 'Editor-in-Chief',
    social: {
      twitter: 'https://twitter.com/marcuschen_seo',
      linkedin: 'https://linkedin.com/in/marcuschenseo',
    },
  },
  {
    id: 'author-2',
    name: 'Sarah Mitchell',
    slug: 'sarah-mitchell',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'Content strategist who\'s managed $2M+ in affiliate revenue. I write honest reviews because I\'ve been burned by fake ones.',
    role: 'Senior Content Strategist',
    social: {
      twitter: 'https://twitter.com/sarahmitchell_content',
      linkedin: 'https://linkedin.com/in/sarahmitchellcontent',
    },
  },
  {
    id: 'author-3',
    name: 'David Park',
    slug: 'david-park',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Technical SEO consultant and former Google engineer. I dig into the data so you get recommendations that actually work.',
    role: 'Technical SEO Lead',
    social: {
      linkedin: 'https://linkedin.com/in/davidparkseo',
    },
  },
  {
    id: 'author-4',
    name: 'Elena Rodriguez',
    slug: 'elena-rodriguez',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    bio: 'Local SEO specialist helping 200+ small businesses rank in their markets. Google Business Profile certified trainer.',
    role: 'Local SEO Expert',
    social: {
      twitter: 'https://twitter.com/elenarodriguez_local',
      linkedin: 'https://linkedin.com/in/elenarodriguezlocal',
    },
  },
]

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id)
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}
