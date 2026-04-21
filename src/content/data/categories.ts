import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'cat-ai-writing',
    name: 'AI Writing Tools',
    slug: 'ai-writing-tools',
    description: 'AI-powered content creation and copywriting tools for SEO optimization.',
    order: 1,
  },
  {
    id: 'cat-keyword-research',
    name: 'Keyword Research',
    slug: 'keyword-research',
    description: 'Tools to find and analyze keywords for better search rankings.',
    order: 2,
  },
  {
    id: 'cat-rank-tracking',
    name: 'Rank Tracking',
    slug: 'rank-tracking',
    description: 'Monitor your search engine rankings and track progress over time.',
    order: 3,
  },
  {
    id: 'cat-link-building',
    name: 'Link Building',
    slug: 'link-building',
    description: 'Tools to help you build quality backlinks and improve domain authority.',
    order: 4,
  },
  {
    id: 'cat-technical-seo',
    name: 'Technical SEO',
    slug: 'technical-seo',
    description: 'Audit and optimize the technical aspects of your website.',
    order: 5,
  },
  {
    id: 'cat-content-optimization',
    name: 'Content Optimization',
    slug: 'content-optimization',
    description: 'AI-powered tools to optimize content for search rankings and user engagement.',
    order: 6,
  },
  {
    id: 'cat-local-seo',
    name: 'Local SEO',
    slug: 'local-seo',
    description: 'Tools for local search optimization and Google Business Profile management.',
    order: 7,
  },
]

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getAllCategories(): Category[] {
  return [...categories].sort((a, b) => a.order - b.order)
}
