export interface Author {
  id: string
  name: string
  slug: string
  bio?: string
  image?: string
  role?: string
  social?: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  icon?: string
  order: number
}

export interface Tool {
  id: string
  name: string
  slug: string
  description?: string
  longDescription?: string
  logo?: string
  website?: string
  affiliateLink?: string
  categoryId?: string
  category?: Category
  pricing?: {
    hasFree?: boolean
    startingPrice?: number
    pricingModel?: 'freemium' | 'subscription' | 'one-time' | 'usage-based' | 'free'
  }
  features?: string[]
  pros?: string[]
  cons?: string[]
  rating?: number
  featured?: boolean
  publishedAt?: string
}

export interface Review {
  id: string
  title: string
  slug: string
  toolId: string
  tool?: Tool
  authorId?: string
  author?: Author
  excerpt?: string
  body?: string
  ratings?: {
    features?: number
    easeOfUse?: number
    valueForMoney?: number
    support?: number
    overall?: number
  }
  verdict?: string
  featuredImage?: string
  publishedAt?: string
  updatedAt?: string
}

export interface Comparison {
  id: string
  title: string
  slug: string
  toolIds: string[]
  tools?: Tool[]
  excerpt?: string
  body?: string
  comparisonTable?: {
    criterion: string
    description?: string
  }[]
  winnerId?: string
  winner?: Tool
  winnerReason?: string
  authorId?: string
  author?: Author
  featuredImage?: string
  publishedAt?: string
  updatedAt?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Post {
  id: string
  title: string
  slug: string
  authorId?: string
  author?: Author
  categoryId?: string
  category?: Category
  excerpt?: string
  body?: string
  featuredImage?: string
  faq?: FAQ[]
  relatedToolIds?: string[]
  relatedTools?: Tool[]
  publishedAt?: string
  updatedAt?: string
}
