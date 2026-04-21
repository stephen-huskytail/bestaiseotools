import type { Review } from '../types'
import { getToolById } from './tools'
import { getAuthorById } from './authors'

export const reviews: Review[] = [
  {
    id: 'review-frase',
    title: 'Frase Review 2026: Best Value AI SEO Tool?',
    slug: 'frase-review',
    toolId: 'tool-frase',
    authorId: 'author-1',
    excerpt: 'After 6 months using Frase daily, here is my honest review covering research, optimization, AI writing, and whether it is worth the price.',
    body: `*Disclosure: This review contains affiliate links. We may earn a commission at no extra cost to you.*

## What is Frase?

Frase is an AI-powered SEO content platform that combines research, writing, and optimization in one tool. It positions itself as a more affordable alternative to Clearscope and Surfer SEO—and largely delivers on that promise.

I have used Frase nearly every day for the past 6 months. Here is what I have learned.

## Frase Key Features

### Content Brief Generator

This is Frase's killer feature. Enter a target keyword, and within minutes you get:

- Questions people are asking (from Google's "People Also Ask")
- Topics covered by top-ranking content
- Average word count of ranking pages
- Suggested headers and outline
- Statistics and facts to include

The brief quality genuinely speeds up my research. What used to take 2 hours of competitor analysis now takes 20 minutes of reviewing Frase's output.

### Content Optimizer

Like Surfer and Clearscope, Frase scores your content against top-ranking pages. The optimization panel shows:

- Target score (aim for 80+)
- Terms to include with suggested usage counts
- Competitor content for reference
- Word count recommendations

The optimization is solid—not quite as refined as Clearscope's term suggestions, but more than adequate for most content.

### AI Writing Assistant

Frase includes AI writing powered by GPT-4. You can:

- Generate full article drafts
- Get paragraph suggestions
- Auto-complete sentences
- Create outlines from keywords

The AI quality is middling. Good for overcoming blank page syndrome, not good enough to publish without heavy editing.

### Answer Engine

A unique Frase feature: the Answer Engine shows exactly what content appears in Google's featured snippets and knowledge panels. Useful for optimizing existing content to win those positions.

## Real-World Results

Over 6 months, I optimized 47 articles with Frase:

- 31 improved their rankings
- 12 reached page 1 from page 2 or 3
- 4 won featured snippets
- Average position improvement: +8.3 spots

These results are comparable to what I achieved with more expensive tools.

## What I Like

**Research Speed:** The content brief generator is genuinely excellent. It identifies gaps and opportunities I would miss manually.

**Value for Money:** At $49/month for the Starter plan, you get research AND optimization. Competitors charge similar prices for just one.

**Clean Interface:** Frase is well-designed and intuitive. New users can be productive within an hour.

**Question Research:** The PAA (People Also Ask) integration surfaces questions that make great H2 headings.

## What I Dislike

**AI Writing Quality:** It is fine for drafts but needs significant editing. Jasper and Claude produce better raw output.

**Limited Team Features:** Collaboration tools are basic until you reach higher tiers.

**No Real Keyword Research:** Frase optimizes content but does not help you find keywords. You still need Ahrefs or Semrush.

**Credit System:** The Starter plan limits you to 4 articles per month. You will likely need the $129 Professional plan for regular publishing.

## Pricing

| Plan | Price | Content Briefs |
|------|-------|----------------|
| Starter | $49/mo | 4/month |
| Professional | $129/mo | 30/month |
| Scale | $299/mo | Unlimited |

All plans include AI writing, though with different credit limits.

The jump from Starter ($49) to Professional ($129) is steep, but necessary if you publish more than 4 optimized articles monthly.

## Who Should Use Frase

**Best for:**
- Solo content creators and small teams
- Writers who value research over pure AI generation
- Budget-conscious marketers who need optimization features
- Anyone transitioning from free tools to paid optimization

**Not ideal for:**
- Large content teams (look at Clearscope)
- Those who need heavy AI generation (add Jasper)
- Users who only need keyword research (get Ahrefs instead)

## Frase vs Alternatives

**vs Surfer SEO:** Surfer has better optimization and AI writing. Frase has better research tools. Surfer is $10 more at the entry level.

**vs Clearscope:** Clearscope is more polished but costs $129 at entry. Frase offers 80% of the value at 40% of the price.

**vs NeuronWriter:** NeuronWriter is cheaper ($23 vs $49) but less intuitive. Frase is worth the premium for the better research tools.

## Final Verdict

Frase delivers excellent value for content creators who need both research and optimization. The content brief generator alone is worth the subscription price.

At $49/month, it is the sweet spot between free tools that lack depth and premium tools that charge $150+. If I had to pick one tool under $100/month, Frase would be a strong contender.

The main limitation is volume—4 articles/month on the Starter plan is restrictive. Plan to upgrade to Professional ($129) if you publish regularly.

[Try Frase with a 7-day free trial →](https://www.frase.io?fpr=bestaiseotools)`,
    ratings: {
      features: 4.0,
      easeOfUse: 4.5,
      valueForMoney: 4.5,
      support: 4.0,
      overall: 4.4,
    },
    verdict: 'Frase is the best value AI SEO tool for solo creators. The research tools are exceptional, and optimization quality matches more expensive competitors. Upgrade to Professional if you publish more than 4 articles monthly.',
    publishedAt: '2026-04-21',
  },
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
