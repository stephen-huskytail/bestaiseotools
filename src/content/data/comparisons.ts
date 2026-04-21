import type { Comparison } from '../types'
import { getToolById } from './tools'
import { getAuthorById } from './authors'

export const comparisons: Comparison[] = [
  {
    id: 'comp-ahrefs-semrush',
    title: 'Ahrefs vs Semrush: Which SEO Tool is Better in 2024?',
    slug: 'ahrefs-vs-semrush',
    toolIds: ['tool-ahrefs', 'tool-semrush'],
    excerpt: 'A detailed comparison of two SEO industry giants. We break down features, pricing, and use cases to help you choose.',
    body: `## Introduction

Ahrefs and Semrush are two of the most popular SEO tools on the market. Both offer comprehensive feature sets, but they have distinct strengths.

## Backlink Analysis

**Ahrefs** has the larger backlink database and updates more frequently. It's the preferred choice for link building professionals.

**Semrush** offers solid backlink data but focuses more on the overall marketing toolkit.

## Keyword Research

Both tools excel at keyword research, but:
- **Ahrefs** provides more accurate difficulty scores
- **Semrush** offers the Keyword Magic Tool with more filtering options

## Pricing

- **Ahrefs**: Starts at $99/month
- **Semrush**: Starts at $119/month (but offers a limited free tier)

## Who Should Choose Which?

- Choose **Ahrefs** if link building is your primary focus
- Choose **Semrush** if you need an all-in-one marketing platform`,
    comparisonTable: [
      { criterion: 'Backlink Database', description: 'Size and freshness of backlink data' },
      { criterion: 'Keyword Research', description: 'Depth of keyword data and suggestions' },
      { criterion: 'Site Audit', description: 'Technical SEO analysis capabilities' },
      { criterion: 'Pricing', description: 'Value for money and available plans' },
      { criterion: 'Ease of Use', description: 'User interface and learning curve' },
    ],
    winnerId: 'tool-ahrefs',
    winnerReason: 'Ahrefs wins for pure SEO work due to its superior backlink database and more accurate data. However, Semrush is better for all-in-one marketing needs.',
    authorId: 'author-1',
    publishedAt: '2024-03-01',
  },
  {
    id: 'comp-surfer-jasper',
    title: 'Surfer SEO vs Jasper AI: Content Optimization vs Content Generation',
    slug: 'surfer-seo-vs-jasper-ai',
    toolIds: ['tool-surfer', 'tool-jasper'],
    excerpt: 'Comparing two different approaches to AI-powered content creation. Which one should you use?',
    body: `## Overview

These tools serve different purposes:
- **Surfer SEO** optimizes content for search rankings
- **Jasper AI** generates content using AI

## Use Cases

**Use Surfer SEO when:**
- You want data-driven SEO recommendations
- You need to optimize existing content
- You want to understand what makes top content rank

**Use Jasper AI when:**
- You need to generate content quickly
- You're scaling content production
- You need help with copywriting

## Can You Use Both?

Yes! Many content teams use Jasper to generate drafts and Surfer to optimize them. They integrate directly with each other.`,
    comparisonTable: [
      { criterion: 'Primary Use', description: 'Main function of the tool' },
      { criterion: 'AI Capabilities', description: 'How AI is used in the product' },
      { criterion: 'SEO Focus', description: 'Built-in SEO features' },
      { criterion: 'Content Output', description: 'What you get from the tool' },
    ],
    winnerId: 'tool-surfer',
    winnerReason: 'For SEO-focused content, Surfer provides more actionable data. Jasper is better for pure content generation at scale.',
    authorId: 'author-1',
    publishedAt: '2024-02-20',
  },
]

export function getComparisonById(id: string): Comparison | undefined {
  const comparison = comparisons.find((c) => c.id === id)
  if (!comparison) return undefined
  return {
    ...comparison,
    tools: comparison.toolIds.map((id) => getToolById(id)).filter(Boolean) as Comparison['tools'],
    winner: comparison.winnerId ? getToolById(comparison.winnerId) : undefined,
    author: comparison.authorId ? getAuthorById(comparison.authorId) : undefined,
  }
}

export function getComparisonBySlug(slug: string): Comparison | undefined {
  const comparison = comparisons.find((c) => c.slug === slug)
  if (!comparison) return undefined
  return {
    ...comparison,
    tools: comparison.toolIds.map((id) => getToolById(id)).filter(Boolean) as Comparison['tools'],
    winner: comparison.winnerId ? getToolById(comparison.winnerId) : undefined,
    author: comparison.authorId ? getAuthorById(comparison.authorId) : undefined,
  }
}

export function getAllComparisons(): Comparison[] {
  return comparisons.map((comparison) => ({
    ...comparison,
    tools: comparison.toolIds.map((id) => getToolById(id)).filter(Boolean) as Comparison['tools'],
    winner: comparison.winnerId ? getToolById(comparison.winnerId) : undefined,
    author: comparison.authorId ? getAuthorById(comparison.authorId) : undefined,
  }))
}
