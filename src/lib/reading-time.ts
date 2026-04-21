const WORDS_PER_MINUTE = 200

export function calculateReadingTime(text: string): number {
  if (!text) return 0
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / WORDS_PER_MINUTE)
}
