import type { FAQ } from '../content/types'

export function extractFaqsFromMarkdown(markdown: string): FAQ[] {
  if (!markdown) return []

  const faqHeaderRegex = /^##\s+(FAQ|Frequently Asked Questions)\s*$/im
  const match = faqHeaderRegex.exec(markdown)
  if (!match) return []

  const faqStartIndex = match.index + match[0].length
  const nextH2Regex = /^##\s+[^#]/m
  const restOfContent = markdown.slice(faqStartIndex)
  const nextH2Match = nextH2Regex.exec(restOfContent)
  const faqSection = nextH2Match
    ? restOfContent.slice(0, nextH2Match.index)
    : restOfContent

  const faqs: FAQ[] = []
  const h3Regex = /^###\s+(.+)$/gm
  let h3Match
  const h3Positions: { question: string; start: number }[] = []

  while ((h3Match = h3Regex.exec(faqSection)) !== null) {
    h3Positions.push({
      question: h3Match[1].trim(),
      start: h3Match.index + h3Match[0].length,
    })
  }

  for (let i = 0; i < h3Positions.length; i++) {
    const start = h3Positions[i].start
    const end = i + 1 < h3Positions.length ? h3Positions[i + 1].start - h3Positions[i + 1].question.length - 4 : faqSection.length
    const answer = faqSection.slice(start, end).trim()

    if (answer) {
      faqs.push({
        question: h3Positions[i].question,
        answer: answer.replace(/^[\n\r]+|[\n\r]+$/g, ''),
      })
    }
  }

  return faqs
}

export function countWords(text: string): number {
  if (!text) return 0
  const stripped = text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_~|>\-]/g, ' ')
    .replace(/\|[^|]+\|/g, '')
  return stripped.trim().split(/\s+/).filter(Boolean).length
}
