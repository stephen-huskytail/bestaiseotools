import type { Post } from '../types'
import { getToolById } from './tools'
import { getAuthorById } from './authors'
import { getCategoryById } from './categories'

export const posts: Post[] = [
  {
    id: 'post-ai-seo-guide',
    title: 'The Complete Guide to AI SEO Tools in 2024',
    slug: 'ai-seo-tools-guide-2024',
    authorId: 'author-1',
    categoryId: 'cat-ai-writing',
    excerpt: 'Everything you need to know about using AI for SEO, from content creation to optimization.',
    body: `## Introduction

AI is transforming how we approach SEO. From content generation to technical audits, AI-powered tools are making SEO more accessible and efficient than ever.

## Types of AI SEO Tools

### Content Generation
Tools like Jasper AI and Copy.ai help you create content faster. They use large language models to generate blog posts, product descriptions, and more.

### Content Optimization
Surfer SEO and Clearscope analyze top-ranking content and provide recommendations to improve your own content.

### Technical SEO
AI-powered crawlers can identify issues faster and prioritize fixes based on impact.

## Best Practices

1. **Always edit AI content** - AI is a starting point, not a replacement for human expertise
2. **Use data-driven optimization** - Tools like Surfer provide actionable recommendations based on real data
3. **Focus on user intent** - AI can help you understand what users are looking for

## Conclusion

AI SEO tools are powerful allies in your marketing toolkit. Start with one tool and expand as you see results.`,
    faq: [
      { question: 'Will AI replace SEO professionals?', answer: 'No. AI tools augment human expertise but cannot replace strategic thinking and creativity.' },
      { question: 'Are AI-generated articles bad for SEO?', answer: 'Not inherently. Google cares about helpful content, not whether it was written by AI or humans.' },
      { question: 'What is the best AI SEO tool?', answer: 'It depends on your needs. For content optimization, try Surfer SEO. For content generation, try Jasper AI.' },
    ],
    relatedToolIds: ['tool-surfer', 'tool-jasper'],
    publishedAt: '2024-03-10',
  },
  {
    id: 'post-keyword-research',
    title: 'Keyword Research in 2024: A Step-by-Step Guide',
    slug: 'keyword-research-guide-2024',
    authorId: 'author-1',
    categoryId: 'cat-keyword-research',
    excerpt: 'Learn how to find profitable keywords that drive traffic and conversions.',
    body: `## Why Keyword Research Matters

Keyword research is the foundation of any successful SEO strategy. It helps you understand what your audience is searching for and how to reach them.

## Step 1: Brainstorm Seed Keywords

Start with broad topics related to your business. These become your seed keywords for further research.

## Step 2: Expand with Tools

Use tools like Ahrefs or Semrush to find related keywords, questions, and long-tail variations.

## Step 3: Analyze Difficulty and Volume

Not all keywords are worth pursuing. Look for keywords with:
- Reasonable search volume
- Manageable difficulty
- Clear search intent

## Step 4: Map Keywords to Content

Group related keywords and assign them to specific pages or content pieces.

## Conclusion

Keyword research takes time, but it's worth the investment. Good keyword research leads to content that ranks and converts.`,
    faq: [
      { question: 'How many keywords should I target per page?', answer: 'Focus on one primary keyword and 2-5 related secondary keywords per page.' },
      { question: 'How do I know if a keyword is too competitive?', answer: 'Check the keyword difficulty score in your SEO tool and analyze who is ranking. If all results are major sites, it may be too competitive.' },
    ],
    relatedToolIds: ['tool-ahrefs', 'tool-semrush'],
    publishedAt: '2024-03-05',
  },
]

export function getPostById(id: string): Post | undefined {
  const post = posts.find((p) => p.id === id)
  if (!post) return undefined
  return {
    ...post,
    author: post.authorId ? getAuthorById(post.authorId) : undefined,
    category: post.categoryId ? getCategoryById(post.categoryId) : undefined,
    relatedTools: post.relatedToolIds?.map((id) => getToolById(id)).filter(Boolean) as Post['relatedTools'],
  }
}

export function getPostBySlug(slug: string): Post | undefined {
  const post = posts.find((p) => p.slug === slug)
  if (!post) return undefined
  return {
    ...post,
    author: post.authorId ? getAuthorById(post.authorId) : undefined,
    category: post.categoryId ? getCategoryById(post.categoryId) : undefined,
    relatedTools: post.relatedToolIds?.map((id) => getToolById(id)).filter(Boolean) as Post['relatedTools'],
  }
}

export function getAllPosts(): Post[] {
  return posts.map((post) => ({
    ...post,
    author: post.authorId ? getAuthorById(post.authorId) : undefined,
    category: post.categoryId ? getCategoryById(post.categoryId) : undefined,
    relatedTools: post.relatedToolIds?.map((id) => getToolById(id)).filter(Boolean) as Post['relatedTools'],
  }))
}

export function getLatestPosts(limit: number = 3): Post[] {
  return getAllPosts()
    .sort((a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime())
    .slice(0, limit)
}
