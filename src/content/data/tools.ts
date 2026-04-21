import type { Tool } from '../types'
import { getCategoryById } from './categories'

export const tools: Tool[] = [
  {
    id: 'tool-surfer',
    name: 'Surfer SEO',
    slug: 'surfer-seo',
    description: 'AI-powered content optimization platform that helps you write content that ranks.',
    longDescription: 'Surfer SEO analyzes top-ranking pages and provides data-driven recommendations to optimize your content for search engines. Features include content editor, SERP analyzer, and keyword research.',
    website: 'https://surferseo.com',
    affiliateLink: 'https://surferseo.com?ref=bestaiseotools',
    categoryId: 'cat-ai-writing',
    pricing: {
      hasFree: false,
      startingPrice: 59,
      pricingModel: 'subscription',
    },
    features: ['Content Editor', 'SERP Analyzer', 'Keyword Research', 'Content Planner', 'AI Writing'],
    pros: ['Data-driven recommendations', 'Easy to use interface', 'Integrates with Google Docs'],
    cons: ['Can be expensive for beginners', 'Learning curve for advanced features'],
    rating: 4.5,
    featured: true,
    publishedAt: '2024-01-15',
  },
  {
    id: 'tool-jasper',
    name: 'Jasper AI',
    slug: 'jasper-ai',
    description: 'AI writing assistant that helps create high-quality content at scale.',
    longDescription: 'Jasper AI uses advanced language models to help you write blog posts, ads, emails, and more. Perfect for content teams looking to scale their output.',
    website: 'https://jasper.ai',
    affiliateLink: 'https://jasper.ai?ref=bestaiseotools',
    categoryId: 'cat-ai-writing',
    pricing: {
      hasFree: true,
      startingPrice: 39,
      pricingModel: 'subscription',
    },
    features: ['AI Content Generation', 'Brand Voice', 'Templates', 'Team Collaboration', 'Chrome Extension'],
    pros: ['High-quality output', 'Many templates', 'Good for teams'],
    cons: ['Credits run out quickly', 'Needs human editing'],
    rating: 4.3,
    featured: true,
    publishedAt: '2024-01-10',
  },
  {
    id: 'tool-ahrefs',
    name: 'Ahrefs',
    slug: 'ahrefs',
    description: 'Comprehensive SEO toolset for keyword research, competitor analysis, and link building.',
    longDescription: 'Ahrefs is an all-in-one SEO platform with one of the largest backlink databases. Essential for serious SEO professionals.',
    website: 'https://ahrefs.com',
    affiliateLink: 'https://ahrefs.com?ref=bestaiseotools',
    categoryId: 'cat-keyword-research',
    pricing: {
      hasFree: false,
      startingPrice: 99,
      pricingModel: 'subscription',
    },
    features: ['Site Explorer', 'Keywords Explorer', 'Site Audit', 'Rank Tracker', 'Content Explorer'],
    pros: ['Massive backlink database', 'Accurate data', 'Great for competitor research'],
    cons: ['Expensive', 'Steep learning curve'],
    rating: 4.8,
    featured: true,
    publishedAt: '2024-01-05',
  },
  {
    id: 'tool-semrush',
    name: 'Semrush',
    slug: 'semrush',
    description: 'All-in-one marketing toolkit for SEO, PPC, content, and competitive research.',
    longDescription: 'Semrush offers over 50 tools for SEO, content marketing, competitor research, PPC, and social media marketing.',
    website: 'https://semrush.com',
    affiliateLink: 'https://semrush.com?ref=bestaiseotools',
    categoryId: 'cat-keyword-research',
    pricing: {
      hasFree: true,
      startingPrice: 119,
      pricingModel: 'subscription',
    },
    features: ['Keyword Magic Tool', 'Site Audit', 'Position Tracking', 'Backlink Analytics', 'Content Marketing Toolkit'],
    pros: ['Comprehensive feature set', 'Free tier available', 'Great reporting'],
    cons: ['Can be overwhelming', 'Expensive for full features'],
    rating: 4.7,
    featured: true,
    publishedAt: '2024-01-08',
  },
  {
    id: 'tool-screaming-frog',
    name: 'Screaming Frog',
    slug: 'screaming-frog',
    description: 'Website crawler for technical SEO audits and analysis.',
    longDescription: 'Screaming Frog SEO Spider is a desktop program that crawls websites to find technical SEO issues.',
    website: 'https://screamingfrog.co.uk',
    categoryId: 'cat-technical-seo',
    pricing: {
      hasFree: true,
      startingPrice: 259,
      pricingModel: 'one-time',
    },
    features: ['Website Crawling', 'Broken Link Detection', 'Redirect Audit', 'Meta Data Analysis', 'XML Sitemap Generation'],
    pros: ['Powerful crawler', 'One-time payment', 'Detailed reports'],
    cons: ['Desktop only', 'Resource intensive'],
    rating: 4.6,
    featured: false,
    publishedAt: '2024-02-01',
  },
]

export function getToolById(id: string): Tool | undefined {
  const tool = tools.find((t) => t.id === id)
  if (tool && tool.categoryId) {
    return { ...tool, category: getCategoryById(tool.categoryId) }
  }
  return tool
}

export function getToolBySlug(slug: string): Tool | undefined {
  const tool = tools.find((t) => t.slug === slug)
  if (tool && tool.categoryId) {
    return { ...tool, category: getCategoryById(tool.categoryId) }
  }
  return tool
}

export function getAllTools(): Tool[] {
  return tools.map((tool) => ({
    ...tool,
    category: tool.categoryId ? getCategoryById(tool.categoryId) : undefined,
  }))
}

export function getFeaturedTools(): Tool[] {
  return getAllTools().filter((t) => t.featured)
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return getAllTools().filter((t) => t.categoryId === categoryId)
}
