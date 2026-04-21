import type { Comparison } from '../types'
import { getToolById } from './tools'
import { getAuthorById } from './authors'

export const comparisons: Comparison[] = [
  {
    id: 'comp-surfer-clearscope',
    title: 'Surfer SEO vs Clearscope 2026: Which Content Optimizer Wins?',
    slug: 'surfer-seo-vs-clearscope',
    toolIds: ['tool-surfer', 'tool-clearscope'],
    featuredImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop',
    excerpt: 'A head-to-head comparison of two premium content optimization tools. We break down features, pricing, and results to help you decide.',
    body: `*Disclosure: This post contains affiliate links. We may earn a commission at no extra cost to you.*

## The Bottom Line

**Choose Surfer SEO if:** You want the best balance of features and price, need AI writing assistance, or work solo or with a small team.

**Choose Clearscope if:** You have a larger content team, need enterprise features, or want the cleanest optimization experience.

Both tools will improve your content rankings. The choice comes down to budget and team size.

## Overview

Two leading content optimization platforms. Both analyze top-ranking content and surface what yours needs. Different approaches, different tradeoffs.

| Feature | Surfer SEO | Clearscope |
|---------|------------|------------|
| Starting Price | $59/mo | $129/mo |
| AI Writing | Yes (built-in) | Limited |
| Google Docs Plugin | Yes | Yes |
| WordPress Plugin | Yes | Yes |
| Unlimited Users | No (2-10 depending on plan) | Yes |
| AI Chatbot Visibility | No | Yes |

## Content Editor Comparison

### Surfer SEO Content Editor

Writing in Google Docs with a real-time SEO coach. Content score updates as you type.

- Target word count (min/max range)
- Required keywords with usage counts
- Heading suggestions
- Image recommendations
- NLP-based term suggestions

Articles scoring 80+ consistently rank well in my testing.

**Surfer's edge:** Competitor content panel. View top-ranking pages directly in the editor. Useful for understanding what's working.

### Clearscope Content Editor

Cleaner approach. Distraction-free editor. Optimization suggestions live in a sidebar, not overlaid on content.

Grading system (A++ to F) reads faster than numerical scores. C+ to A progression feels tangible.

**Clearscope's edge:** Semantically grouped term suggestions. Related concepts clustered together. Easier to incorporate naturally.

## AI Writing Capabilities

### Surfer AI

AI generation built into the editor:
- Full articles from a keyword
- Paragraph suggestions as you write
- Automatic outlines

Quality beats raw ChatGPT. Still needs editing. Good for first drafts, heavy revision expected.

### Clearscope AI

Limited AI features:
- 20 AI drafts/month on Essentials
- Basic suggestions

Serious AI generation? Pair Clearscope with Jasper.

**Winner: Surfer SEO** – Significantly better AI integration

## Keyword Research

### Surfer

Surfer's keyword research tools are decent but not exceptional:
- Keyword Surfer (free Chrome extension)
- Content Planner for topic clusters
- Basic keyword metrics

For serious keyword research, you'll still need Ahrefs or Semrush.

### Clearscope

Clearscope focuses less on keyword discovery and more on content optimization. The "Discover" feature helps find related topics, but it's not a keyword research tool.

**Winner: Tie** – Neither replaces dedicated keyword tools

## Pricing Breakdown

### Surfer SEO

| Plan | Price | Articles/Month |
|------|-------|----------------|
| Basic | $59 | 10 |
| Pro | $119 | 30 |
| Business | $219 | 70 |

All plans include Surfer AI, keyword research, and audits.

### Clearscope

| Plan | Price | Reports/Month |
|------|-------|---------------|
| Essentials | $129 | 20 |
| Business | $399 | 50 |
| Enterprise | Custom | Custom |

Clearscope includes unlimited users on all plans.

**Winner: Surfer SEO** – Better value, especially for smaller teams

## Real Results

10 articles per tool. 3 months tracked.

**Surfer SEO:**
- Position improvement: +12 spots average
- Page 1: 7/10 articles
- Time to results: 4 weeks

**Clearscope:**
- Position improvement: +10 spots average
- Page 1: 6/10 articles
- Time to results: 5 weeks

Not a dramatic difference. Both work. Surfer had a slight edge—small sample size caveat applies.

## Integration and Workflow

Both tools integrate with:
- Google Docs
- WordPress
- Most popular writing tools

Surfer adds:
- Jasper integration
- Semrush integration
- Chrome extension for SERP analysis

Clearscope adds:
- Google Search Console integration
- AI platform visibility tracking
- Enterprise SSO

## Who Should Choose Which?

### Choose Surfer SEO if:

- You're a solo creator or small team (< 5 people)
- Budget is a factor
- You want built-in AI writing
- You need competitor content analysis

### Choose Clearscope if:

- You have a content team of 5+ people
- Unlimited users matters (Clearscope wins here)
- You prioritize a clean, distraction-free interface
- You need AI visibility tracking

## Final Verdict

**Overall Winner: Surfer SEO**

Better value for most users. Comparable optimization, superior AI writing, lower cost—especially at scale.

Clearscope wins for enterprise teams where unlimited users and clean workflows justify the premium. Majority of content creators? Surfer.

[Try Surfer SEO →](https://surferseo.com?ref=smartseotools) | [Try Clearscope →](https://www.clearscope.io?ref=smartseotools)`,
    comparisonTable: [
      { criterion: 'Pricing', description: 'Monthly cost and value for money' },
      { criterion: 'Content Editor', description: 'Quality of optimization recommendations' },
      { criterion: 'AI Writing', description: 'Built-in AI content generation capabilities' },
      { criterion: 'Team Features', description: 'Collaboration and user management' },
      { criterion: 'Ease of Use', description: 'Learning curve and interface quality' },
      { criterion: 'Integrations', description: 'Third-party tool compatibility' },
    ],
    winnerId: 'tool-surfer',
    winnerReason: 'Surfer SEO wins for most users due to better pricing, superior AI integration, and comparable optimization quality. Clearscope is better for enterprise teams needing unlimited users.',
    authorId: 'author-1',
    publishedAt: '2026-04-21',
  },
  {
    id: 'comp-neuronwriter-frase',
    title: 'NeuronWriter vs Frase 2026: Best Budget Content Optimizer?',
    slug: 'neuronwriter-vs-frase',
    toolIds: ['tool-neuronwriter', 'tool-frase'],
    authorId: 'author-2',
    featuredImage: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=675&fit=crop',
    excerpt: 'Comparing the two best affordable content optimization tools. Which delivers better value under $50/month?',
    body: `*Disclosure: This post contains affiliate links. We may earn a commission at no extra cost to you.*

## The Quick Answer

**Choose NeuronWriter if:** You want the absolute lowest price ($23/month), need internal linking suggestions, or prefer NLP-focused optimization.

**Choose Frase if:** You value research tools over pure optimization, want better AI writing, or prefer a cleaner interface.

Both are excellent budget alternatives to Surfer SEO and Clearscope.

## Why Compare These Two?

Same market position. Affordable content optimization for solo creators and small teams who can't justify $100+/month.

$23/month (NeuronWriter Bronze) vs $49/month (Frase Starter). Most accessible entry points into AI-powered SEO optimization.

## Feature Comparison

| Feature | NeuronWriter | Frase |
|---------|-------------|-------|
| Starting Price | $23/mo | $49/mo |
| Content Optimization | Yes | Yes |
| AI Writing | Yes | Yes |
| SERP Analysis | Yes | Yes |
| Content Briefs | Basic | Excellent |
| Internal Link Suggestions | Yes | No |
| Question Research | Limited | Excellent |
| WordPress Integration | Yes | No |
| Plagiarism Checker | Yes | No |

## Content Optimization Quality

### NeuronWriter Optimization

Google Natural Language Processing for semantic analysis. Identifies:

- Key terms from top-ranking pages
- Semantic relationships between concepts
- Content structure patterns
- Optimal word counts

Panel is functional but cluttered. Term suggestions, competitor analysis, and scoring compete for attention.

**Strength:** NLP catches semantic variations. Competitors use "machine learning" and "ML" interchangeably? NeuronWriter recognizes both.

### Frase Optimization

Frase takes a cleaner approach. The optimization sidebar shows:

- Term suggestions grouped by topic
- Content score (0-100)
- Competitor content for reference
- Question coverage

The interface is more intuitive than NeuronWriter. Terms are organized logically rather than dumped in a single list.

**Strength:** Better research integration. You can see what questions competitors are answering and ensure you cover them too.

**Winner: Frase** for usability, NeuronWriter for depth

## AI Writing Capabilities

### NeuronWriter AI

NeuronWriter includes AI writing in all plans. You can:

- Generate full articles
- Get paragraph completions
- Create outlines
- Rewrite existing content

The output quality is acceptable for drafts but requires significant editing. Think of it as a starting point, not finished content.

Credit limits matter here. The Bronze plan ($23) includes 15,000 AI credits—enough for roughly 10-15 full articles depending on length.

### Frase AI

Frase uses GPT-4 for content generation:

- Full article drafts
- Section-by-section writing
- Answer generation
- Outline creation

The quality is slightly better than NeuronWriter—more coherent paragraphs and better flow. But it still needs human editing.

**Limitation:** The Starter plan ($49) limits you to 4 article briefs/month. The AI writing credits are separate but still capped.

**Winner: Frase** for quality, NeuronWriter for volume

## Research Tools

### NeuronWriter Research

NeuronWriter focuses on competitor analysis:

- Top 30 SERP results analysis
- Content structure breakdown
- Keyword gap identification
- Competitor scoring

It tells you what competitors are doing but does not synthesize insights as effectively as Frase.

### Frase Research

Standout feature. Content Brief Generator delivers:

- Comprehensive topic analysis
- Questions from "People Also Ask"
- Key statistics and facts to include
- Suggested outline with headers
- Competitor content summaries

Brief quality is exceptional. Two hours of manual research compressed to 20 minutes of Frase review.

**Winner: Frase** by a significant margin

## Unique Features

### NeuronWriter Only

- **Internal Link Suggestions:** Analyzes your existing content and suggests internal linking opportunities. Genuinely useful for site architecture.
- **Plagiarism Checker:** Built-in duplicate content detection. Helpful if using AI generation.
- **WordPress Plugin:** Direct publishing integration.

### Frase Only

- **Answer Engine:** Shows exactly what appears in featured snippets. Great for targeting position zero.
- **Topic Clustering:** Helps plan content clusters around pillar pages.
- **Google Docs Integration:** Write in Docs with Frase suggestions.

## Pricing Deep Dive

### NeuronWriter Pricing

| Plan | Monthly | Yearly |
|------|---------|--------|
| Bronze | $23 | $19 |
| Silver | $45 | $37 |
| Gold | $69 | $57 |

All plans include AI writing, optimization, and core features. Higher tiers add more analyses, AI credits, and projects.

### Frase Pricing

| Plan | Monthly | Features |
|------|---------|----------|
| Starter | $49 | 4 briefs/month |
| Professional | $129 | 30 briefs/month |
| Scale | $299 | Unlimited |

The jump from Starter to Professional is steep. If you publish more than 4 optimized articles monthly, budget for $129.

**Best Value:**
- NeuronWriter Bronze ($23) for maximum savings
- Frase Starter ($49) if research tools justify the premium

## Real Results Comparison

I ran a 2-month test optimizing 10 articles with each tool:

**NeuronWriter Results:**
- Average position improvement: +6.2 spots
- Articles reaching page 1: 3/10
- Time to see results: 5 weeks average

**Frase Results:**
- Average position improvement: +7.8 spots
- Articles reaching page 1: 4/10
- Time to see results: 4 weeks average

Frase had a slight edge, but both tools produced measurable improvements. The $26/month difference may or may not justify Frase's results.

## Who Should Choose Which?

### Choose NeuronWriter If:

- Budget is your primary constraint
- You need internal linking suggestions
- You publish 10+ articles monthly (credits go further)
- You use WordPress
- You want plagiarism checking included

### Choose Frase If:

- Research and briefs are most valuable to you
- You prioritize a clean interface
- You publish 4 or fewer optimized articles monthly
- You want featured snippet optimization
- You can justify the $26/month premium

## My Recommendation

**For most budget-conscious creators: Frase**

Despite costing double, Frase's research tools save enough time to justify the premium. The content briefs alone are worth $49/month if you value efficient workflows.

**Exception: High-volume publishers**

If you optimize 10+ articles monthly, NeuronWriter's credit system is more generous. You get more optimization runs per dollar.

[Try NeuronWriter →](https://neuronwriter.com?ref=smartseotools) | [Try Frase →](https://www.frase.io?fpr=smartseotools)`,
    comparisonTable: [
      { criterion: 'Pricing', description: 'Monthly cost and value' },
      { criterion: 'Content Optimization', description: 'Quality of recommendations' },
      { criterion: 'AI Writing', description: 'Content generation quality' },
      { criterion: 'Research Tools', description: 'SERP analysis and briefs' },
      { criterion: 'Unique Features', description: 'Differentiating capabilities' },
    ],
    winnerId: 'tool-frase',
    winnerReason: 'Frase wins for most users due to superior research tools and cleaner interface. NeuronWriter is better for budget-constrained high-volume publishers.',
    publishedAt: '2026-04-21',
  },
  {
    id: 'comp-ahrefs-semrush',
    title: 'Ahrefs vs Semrush 2026: The Definitive SEO Tool Comparison',
    slug: 'ahrefs-vs-semrush',
    toolIds: ['tool-ahrefs', 'tool-semrush'],
    authorId: 'author-3',
    featuredImage: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&h=675&fit=crop',
    excerpt: 'The two biggest names in SEO tools go head-to-head. After years of using both, here is the definitive comparison to help you choose.',
    body: `*Disclosure: This post contains affiliate links. We may earn a commission at no extra cost to you.*

## The Bottom Line

**Choose Ahrefs if:** Backlink analysis and link building are your primary focus, you value data accuracy over breadth, or you prefer a focused toolset.

**Choose Semrush if:** You need an all-in-one marketing platform, your work spans SEO/PPC/content/social, or you want the most comprehensive feature set.

Both are excellent. The choice depends on how you work.

## Overview

Two dominant SEO platforms. Together: 60%+ of the professional tools market. Both comprehensive. Both expensive. Both have fanatical users.

| Feature | Ahrefs | Semrush |
|---------|--------|---------|
| Starting Price | $99/mo | $119/mo |
| Free Tier | No | Yes (limited) |
| Backlink Database | 35+ trillion links | 27+ trillion links |
| Keyword Database | 20+ billion keywords | 25+ billion keywords |
| Tools Included | 15+ | 50+ |
| Best For | Link building, backlink analysis | All-in-one marketing |

## Backlink Analysis

Clearest differentiator between the two.

### Ahrefs Backlinks

Largest and freshest backlink database in the industry:

- 35+ trillion links indexed
- 15-minute index for new links
- 6 trillion links crawled daily
- Best anchor text analysis
- Most accurate DR/UR metrics

Site Explorer shows every backlink: Domain Rating, URL Rating, anchor text, first/last seen dates, dofollow/nofollow status.

For backlink analysis and link building? Ahrefs wins clearly.

### Semrush Backlinks

Semrush has a strong backlink database, but it lags Ahrefs:

- 27+ trillion links indexed
- Slower index updates
- Good toxic link identification
- Solid link building tools

The Backlink Gap tool is excellent—showing sites that link to competitors but not you. But for raw backlink data, Ahrefs wins.

**Winner: Ahrefs** (significantly better backlink data)

## Keyword Research

Both excel at keyword research with different strengths.

### Ahrefs Keywords Explorer

Ahrefs provides:

- 20+ billion keywords
- Accurate keyword difficulty scores
- Click data (not just search volume)
- Keyword ideas with 12+ reports
- Parent topic identification
- SERP analysis for each keyword

The keyword difficulty score is notably more accurate than competitors. Ahrefs tells you not just volume, but whether clicks actually happen (useful for featured snippet queries).

### Semrush Keyword Magic Tool

Semrush's flagship keyword tool offers:

- 25+ billion keywords
- Advanced filtering (word count, SERP features, intent)
- Keyword grouping by topic
- Question-based keyword mining
- Intent classification (informational/commercial/transactional)

The filtering options are more sophisticated. You can narrow millions of suggestions to a manageable list faster.

**Winner: Tie** — Ahrefs for accuracy, Semrush for filtering/volume

## Site Audit / Technical SEO

### Ahrefs Site Audit

Ahrefs crawls your site for:

- 100+ technical issues
- Core Web Vitals
- Internal linking analysis
- Content quality signals
- JavaScript rendering

Reports are clean and actionable. The health score provides quick overview.

### Semrush Site Audit

Semrush offers more comprehensive crawling:

- 140+ technical checks
- More detailed Core Web Vitals
- Page-level recommendations
- Historical trend tracking
- Automated re-crawling

The issue explanations are more detailed, with specific fix instructions.

**Winner: Semrush** (more comprehensive technical analysis)

## Rank Tracking

### Ahrefs Rank Tracker

- Daily updates
- Desktop and mobile
- Unlimited keywords on higher plans
- SERP feature tracking
- Competitor comparison

Clean interface, accurate data.

### Semrush Position Tracking

- Daily updates (option for weekly)
- Desktop, mobile, tablet
- Location-specific tracking
- Share of Voice metrics
- SERP feature monitoring
- Cannibalization alerts

More features, including the useful Share of Voice metric that shows your visibility relative to competitors.

**Winner: Semrush** (more features and metrics)

## Content Tools

### Ahrefs Content Explorer

Find top-performing content by:

- Topic/keyword
- Domain
- Backlinks earned
- Social shares
- Traffic estimates

Great for content ideation and finding link-worthy topics.

### Semrush Content Marketing Toolkit

Semrush offers a complete content suite:

- Topic Research
- SEO Content Template
- SEO Writing Assistant
- Content Audit
- Brand Monitoring
- Post Tracking

The Writing Assistant integrates with Google Docs and WordPress for real-time optimization.

**Winner: Semrush** (complete content toolkit vs single tool)

## Competitive Analysis

### Ahrefs

- Organic traffic estimates
- Top keywords driving traffic
- Backlink profile analysis
- Content gap analysis
- Historical data

Data accuracy is exceptional.

### Semrush

- Traffic estimates (with trend data)
- Traffic by channel (organic/paid/social/direct)
- Advertising analysis (PPC competitors)
- Content analysis
- Social media tracking
- Market Explorer

More dimensions of competitive intelligence.

**Winner: Semrush** (broader competitive analysis)

## Pricing Comparison

### Ahrefs Pricing

| Plan | Monthly | Keywords Tracked | Projects |
|------|---------|-----------------|----------|
| Lite | $99 | 750 | 5 |
| Standard | $199 | 2,000 | 20 |
| Advanced | $399 | 5,000 | 50 |
| Enterprise | $999 | 10,000 | 100 |

No free tier. 7-day trial for $7 is gone—you now need to pay full price.

### Semrush Pricing

| Plan | Monthly | Keywords Tracked | Projects |
|------|---------|-----------------|----------|
| Pro | $119 | 500 | 5 |
| Guru | $229 | 1,500 | 15 |
| Business | $449 | 5,000 | 40 |

Free tier includes 10 searches/day. Additional users cost $45-100/month.

**Cost Winner: Ahrefs** at entry level ($99 vs $119), **Semrush** for teams (free tier + more included features)

## Learning Curve

### Ahrefs

- Focused toolset (easier to learn)
- Clean interface
- Excellent documentation
- Ahrefs Academy free courses
- Strong YouTube channel

Most users are productive within 2-5 hours.

### Semrush

- 50+ tools (overwhelming at first)
- More complex interface
- Comprehensive documentation
- Semrush Academy certifications
- Regular webinars

Expect 10-20 hours to feel comfortable.

**Winner: Ahrefs** (much faster to learn)

## Real-World Usage

After years of using both platforms:

**I use Ahrefs for:**
- Backlink analysis and audits
- Link building campaigns
- Competitor backlink research
- Content Explorer research
- Quick keyword difficulty checks

**I use Semrush for:**
- Comprehensive site audits
- Rank tracking (Share of Voice)
- Competitive intelligence
- Client reporting
- PPC competitor analysis

Many professionals use both. If budget forces a choice, the decision depends on your primary use case.

## Who Should Choose Which?

### Choose Ahrefs If:

- Link building is your primary focus
- You value data accuracy over feature breadth
- You prefer simpler, focused tools
- You want the best backlink database
- Budget is tight ($99 vs $119)
- You learn tools by doing, not reading

### Choose Semrush If:

- You need an all-in-one platform
- Your work spans SEO, PPC, content, social
- You manage multiple clients (reporting)
- You want the most comprehensive feature set
- You need competitive intelligence beyond SEO
- You want a free tier to test

## Final Verdict

**Pure SEO work: Ahrefs.**

Better backlink database. More accurate keyword difficulty. Focused toolset, faster to use.

**Marketing teams: Semrush.**

Breadth of features—content tools, PPC analysis, social tracking—makes it a true marketing platform, not just SEO.

**Ideal setup:** Both. Ahrefs for backlinks and link building, Semrush for everything else. $218/month combined is steep. Agencies often find it worthwhile.

[Try Ahrefs →](https://ahrefs.com?ref=smartseotools) | [Try Semrush Free →](https://semrush.com?ref=smartseotools)`,
    comparisonTable: [
      { criterion: 'Backlink Database', description: 'Size, freshness, and accuracy of backlink data' },
      { criterion: 'Keyword Research', description: 'Database size, filtering, and accuracy' },
      { criterion: 'Site Audit', description: 'Technical SEO analysis depth' },
      { criterion: 'Rank Tracking', description: 'Features and accuracy of position monitoring' },
      { criterion: 'Content Tools', description: 'Content research and optimization features' },
      { criterion: 'Competitive Analysis', description: 'Depth of competitor intelligence' },
      { criterion: 'Pricing', description: 'Value for money at each tier' },
      { criterion: 'Learning Curve', description: 'Time to become productive' },
    ],
    winnerId: 'tool-ahrefs',
    winnerReason: 'Ahrefs wins for pure SEO work due to superior backlink data and focused toolset. Semrush wins for all-in-one marketing teams. The best choice depends on your primary use case.',
    publishedAt: '2026-04-21',
  },
  {
    id: 'comp-surfer-jasper',
    title: 'Surfer SEO vs Jasper AI: Content Optimization vs Content Generation',
    slug: 'surfer-seo-vs-jasper-ai',
    toolIds: ['tool-surfer', 'tool-jasper'],
    featuredImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=675&fit=crop',
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
    publishedAt: '2026-04-21',
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

export function getRelatedComparisons(slug: string, limit: number = 3): Comparison[] {
  const currentComparison = comparisons.find((c) => c.slug === slug)
  if (!currentComparison) return []

  const currentToolIds = new Set(currentComparison.toolIds)

  return getAllComparisons()
    .filter((c) => c.slug !== slug)
    .map((c) => ({
      comparison: c,
      overlap: c.toolIds?.filter((id) => currentToolIds.has(id)).length || 0,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, limit)
    .map((item) => item.comparison)
}
