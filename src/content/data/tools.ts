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
    affiliateLink: 'https://surferseo.com?ref=smartseotools',
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
    affiliateLink: 'https://jasper.ai?ref=smartseotools',
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
    affiliateLink: 'https://ahrefs.com?ref=smartseotools',
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
    affiliateLink: 'https://semrush.com?ref=smartseotools',
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
  {
    id: 'tool-frase',
    name: 'Frase',
    slug: 'frase',
    description: 'AI-powered content research and optimization platform for SEO-driven content creation.',
    longDescription: 'Frase helps you research, write, and optimize SEO content faster. It analyzes top-ranking content, generates briefs, and provides AI writing assistance with built-in optimization scoring.',
    website: 'https://www.frase.io',
    affiliateLink: 'https://www.frase.io?fpr=smartseotools',
    categoryId: 'cat-content-optimization',
    pricing: {
      hasFree: false,
      startingPrice: 49,
      pricingModel: 'subscription',
    },
    features: ['Content Brief Generator', 'AI Writing Assistant', 'SERP Analysis', 'Content Optimization Score', 'Question Research', 'Topic Clustering'],
    pros: ['Excellent research capabilities', 'Fast brief generation', 'Good value for solo users', '7-day free trial'],
    cons: ['AI writing quality varies', 'Limited collaboration on lower tiers'],
    rating: 4.4,
    featured: true,
    publishedAt: '2026-04-21',
  },
  {
    id: 'tool-clearscope',
    name: 'Clearscope',
    slug: 'clearscope',
    description: 'Enterprise content optimization platform for creating high-ranking, discoverable content.',
    longDescription: 'Clearscope is a premium content optimization tool that helps teams create content optimized for both Google search and AI platforms like ChatGPT. Features deep SERP analysis, content grading, and team collaboration.',
    website: 'https://www.clearscope.io',
    affiliateLink: 'https://www.clearscope.io?ref=smartseotools',
    categoryId: 'cat-content-optimization',
    pricing: {
      hasFree: false,
      startingPrice: 129,
      pricingModel: 'subscription',
    },
    features: ['Content Optimization', 'SERP Analysis', 'Content Grading', 'Team Collaboration', 'Google Docs Integration', 'WordPress Plugin', 'AI Visibility Tracking'],
    pros: ['Best-in-class optimization', 'Clean interface', 'Unlimited users', 'Enterprise-ready'],
    cons: ['Higher price point', 'No free trial', 'Limited AI writing'],
    rating: 4.6,
    featured: true,
    publishedAt: '2026-04-21',
  },
  {
    id: 'tool-neuronwriter',
    name: 'NeuronWriter',
    slug: 'neuronwriter',
    description: 'Affordable AI content editor with semantic SEO optimization and NLP analysis.',
    longDescription: 'NeuronWriter combines AI writing with advanced semantic SEO analysis. It uses Google NLP and competitor analysis to help you create optimized content at a fraction of the cost of premium tools.',
    website: 'https://neuronwriter.com',
    affiliateLink: 'https://neuronwriter.com?ref=smartseotools',
    categoryId: 'cat-content-optimization',
    pricing: {
      hasFree: false,
      startingPrice: 23,
      pricingModel: 'subscription',
    },
    features: ['AI Content Generation', 'NLP-Based Optimization', 'Competitor Analysis', 'Internal Link Suggestions', 'Plagiarism Checker', 'WordPress Integration', 'Content Planner'],
    pros: ['Very affordable', 'Solid NLP optimization', 'Good AI writing', 'Internal linking features'],
    cons: ['Interface can be cluttered', 'Smaller user community', 'Analysis credits limited'],
    rating: 4.3,
    featured: true,
    publishedAt: '2026-04-21',
  },
  {
    id: 'tool-koala',
    name: 'Koala AI',
    slug: 'koala-ai',
    description: 'AI article writer designed for SEO-optimized long-form content at scale.',
    longDescription: 'Koala AI specializes in generating full-length, SEO-optimized articles with real-time SERP data. It creates content with proper structure, internal links, and images included.',
    website: 'https://koala.sh',
    affiliateLink: 'https://koala.sh?ref=smartseotools',
    categoryId: 'cat-ai-writing',
    pricing: {
      hasFree: false,
      startingPrice: 9,
      pricingModel: 'subscription',
    },
    features: ['One-Click Article Generation', 'Real-Time SERP Analysis', 'Auto Internal Linking', 'Image Integration', 'Outline Editor', 'WordPress Publishing', 'Bulk Generation'],
    pros: ['Extremely affordable', 'High-quality long-form output', 'Built-in SEO optimization', 'Fast generation'],
    cons: ['Still needs human editing', 'Limited customization on lower tiers', 'No content optimization editor'],
    rating: 4.4,
    featured: true,
    publishedAt: '2026-04-21',
  },
  {
    id: 'tool-copy-ai',
    name: 'Copy.ai',
    slug: 'copy-ai',
    description: 'AI copywriting platform for marketing copy, social media, and content ideation.',
    longDescription: 'Copy.ai offers a suite of AI writing tools for marketing teams. Create blog posts, social media content, ad copy, and more with templates designed for different use cases.',
    website: 'https://www.copy.ai',
    affiliateLink: 'https://www.copy.ai?via=smartseotools',
    categoryId: 'cat-ai-writing',
    pricing: {
      hasFree: true,
      startingPrice: 49,
      pricingModel: 'subscription',
    },
    features: ['90+ Copywriting Templates', 'Blog Post Generator', 'Social Media Tools', 'Brand Voice', 'Workflow Automation', 'Team Collaboration'],
    pros: ['Generous free tier', 'Great for short-form copy', 'Easy to use', 'Good template variety'],
    cons: ['Long-form content needs work', 'Less SEO-focused than competitors'],
    rating: 4.2,
    featured: false,
    publishedAt: '2026-04-21',
  },
  {
    id: 'tool-marketmuse',
    name: 'MarketMuse',
    slug: 'marketmuse',
    description: 'AI content intelligence platform for content strategy and optimization at scale.',
    longDescription: 'MarketMuse uses AI to analyze your entire content library, identify gaps, and provide strategic recommendations. Best for enterprise teams with large content operations.',
    website: 'https://www.marketmuse.com',
    affiliateLink: 'https://www.marketmuse.com?ref=smartseotools',
    categoryId: 'cat-content-optimization',
    pricing: {
      hasFree: true,
      startingPrice: 149,
      pricingModel: 'subscription',
    },
    features: ['Content Inventory Analysis', 'Topic Modeling', 'Content Briefs', 'Competitive Analysis', 'Content Scoring', 'First Draft Generator'],
    pros: ['Powerful content strategy tools', 'Good for content audits', 'Unique topic authority metrics'],
    cons: ['Expensive', 'Steep learning curve', 'Overkill for small sites'],
    rating: 4.3,
    featured: false,
    publishedAt: '2026-04-21',
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
