import type { Review } from '../types'
import { getToolById } from './tools'
import { getAuthorById } from './authors'

export const reviews: Review[] = [
  {
    id: 'review-surfer',
    title: 'Surfer SEO Review 2024: Is It Worth the Investment?',
    slug: 'surfer-seo-review',
    toolId: 'tool-surfer',
    authorId: 'author-1',
    excerpt: 'An in-depth look at Surfer SEO, the AI-powered content optimization platform that promises to help you rank higher.',
    body: `## What is Surfer SEO?

Surfer SEO is a content optimization tool that uses AI and data analysis to help you create content that ranks in search engines. It analyzes top-ranking pages for your target keywords and provides actionable recommendations.

## Key Features

### Content Editor
The Content Editor is Surfer's flagship feature. It provides real-time suggestions as you write, including keyword recommendations, content structure, and word count targets.

### SERP Analyzer
Analyze the top 50 results for any keyword to understand what's working for your competitors.

### AI Writing
Surfer now includes AI writing capabilities powered by GPT to help you generate content faster.

## Pricing

Surfer SEO starts at $59/month for the Basic plan, which includes 10 Content Editor articles per month. The Pro plan at $119/month is better for agencies and teams.

## Verdict

Surfer SEO is an excellent tool for content creators who want data-driven guidance. While it's not the cheapest option, the ROI can be significant if you're serious about SEO.`,
    ratings: {
      features: 4.5,
      easeOfUse: 4.0,
      valueForMoney: 4.0,
      support: 4.5,
      overall: 4.5,
    },
    verdict: 'Surfer SEO is a must-have for serious content marketers. The data-driven approach takes the guesswork out of SEO content creation.',
    publishedAt: '2024-02-15',
  },
  {
    id: 'review-ahrefs',
    title: 'Ahrefs Review: The Ultimate SEO Toolkit?',
    slug: 'ahrefs-review',
    toolId: 'tool-ahrefs',
    authorId: 'author-1',
    excerpt: 'We dive deep into Ahrefs to see if it lives up to its reputation as the gold standard for SEO professionals.',
    body: `## Overview

Ahrefs is one of the most powerful SEO toolsets available, known for having one of the largest backlink databases in the industry.

## Core Features

### Site Explorer
Analyze any website's backlink profile, organic traffic, and top-performing content.

### Keywords Explorer
Research keywords across 10+ search engines with accurate difficulty scores and click metrics.

### Site Audit
Crawl your website to find technical SEO issues that could be hurting your rankings.

## Pricing

Starting at $99/month, Ahrefs isn't cheap. However, for professional SEOs, the investment typically pays for itself quickly.

## Conclusion

If you're serious about SEO, Ahrefs is worth every penny. The data accuracy and depth of features make it indispensable.`,
    ratings: {
      features: 5.0,
      easeOfUse: 4.0,
      valueForMoney: 4.5,
      support: 4.0,
      overall: 4.8,
    },
    verdict: 'Ahrefs is the gold standard for SEO professionals. Expensive but worth it for anyone doing SEO at scale.',
    publishedAt: '2024-02-10',
  },
]

export function getReviewById(id: string): Review | undefined {
  const review = reviews.find((r) => r.id === id)
  if (!review) return undefined
  return {
    ...review,
    tool: review.toolId ? getToolById(review.toolId) : undefined,
    author: review.authorId ? getAuthorById(review.authorId) : undefined,
  }
}

export function getReviewBySlug(slug: string): Review | undefined {
  const review = reviews.find((r) => r.slug === slug)
  if (!review) return undefined
  return {
    ...review,
    tool: review.toolId ? getToolById(review.toolId) : undefined,
    author: review.authorId ? getAuthorById(review.authorId) : undefined,
  }
}

export function getAllReviews(): Review[] {
  return reviews.map((review) => ({
    ...review,
    tool: review.toolId ? getToolById(review.toolId) : undefined,
    author: review.authorId ? getAuthorById(review.authorId) : undefined,
  }))
}

export function getLatestReviews(limit: number = 3): Review[] {
  return getAllReviews()
    .sort((a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime())
    .slice(0, limit)
}
