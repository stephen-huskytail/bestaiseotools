#!/usr/bin/env node
/**
 * Ahrefs rank tracker for smartseotools.ai
 * Run via: doppler run -- node scripts/rank-tracker.mjs
 *
 * Reads AHREFS_API_KEY from env (injected by Doppler).
 * Queries Ahrefs API v3 for each keyword in rank-keywords.json.
 * Saves results to scripts/rank-history/YYYY-MM-DD.json.
 * Compares against previous week and flags drops > alert_threshold.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const AHREFS_API_KEY = process.env.AHREFS_API_KEY
if (!AHREFS_API_KEY) {
  console.error('AHREFS_API_KEY not set. Run via: doppler run -- node scripts/rank-tracker.mjs')
  process.exit(1)
}

const configPath = resolve(__dirname, 'rank-keywords.json')
const config = JSON.parse(readFileSync(configPath, 'utf8'))
const historyDir = resolve(__dirname, 'rank-history')
mkdirSync(historyDir, { recursive: true })

const today = new Date().toISOString().slice(0, 10)
const outputPath = resolve(historyDir, `${today}.json`)

async function fetchRankings(keyword, target, country) {
  const params = new URLSearchParams({
    select: 'keyword,best_position,best_position_url,volume,sum_traffic',
    target,
    date: today,
    where: JSON.stringify({ and: [{ field: 'keyword', is: ['eq', keyword] }] }),
    country,
    limit: '1',
  })

  const res = await fetch(`https://api.ahrefs.com/v3/site-explorer/organic-keywords?${params}`, {
    headers: { Authorization: `Bearer ${AHREFS_API_KEY}` },
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Ahrefs API error ${res.status}: ${text}`)
  }

  const data = await res.json()
  return data.keywords?.[0] ?? null
}

async function run() {
  console.log(`\nRank tracker — ${today}`)
  console.log(`Target: ${config.target}\n`)

  const results = []

  for (const kw of config.keywords) {
    try {
      const ranking = await fetchRankings(kw.keyword, config.target, config.country)
      const position = ranking?.best_position ?? null
      const url = ranking?.best_position_url ?? null
      const volume = ranking?.volume ?? null
      const traffic = ranking?.sum_traffic ?? 0

      results.push({
        keyword: kw.keyword,
        slug: kw.slug,
        type: kw.type,
        priority: kw.priority,
        position,
        url,
        volume,
        traffic,
        date: today,
      })

      const posStr = position ? `#${position}` : 'not ranking'
      console.log(`  ${kw.priority} | ${posStr.padEnd(8)} | ${kw.keyword}`)
    } catch (err) {
      console.error(`  ERROR | ${kw.keyword}: ${err.message}`)
      results.push({
        keyword: kw.keyword,
        slug: kw.slug,
        type: kw.type,
        priority: kw.priority,
        position: null,
        url: null,
        volume: null,
        traffic: 0,
        date: today,
        error: err.message,
      })
    }

    // Ahrefs rate-limit: ~1 req/s is safe
    await new Promise((r) => setTimeout(r, 1100))
  }

  writeFileSync(outputPath, JSON.stringify({ date: today, target: config.target, results }, null, 2))
  console.log(`\nSaved: ${outputPath}`)

  // WoW comparison
  const alerts = compareWithPreviousWeek(results)
  if (alerts.length) {
    console.log('\n=== ALERTS ===')
    for (const a of alerts) console.log(`  ${a}`)
  }

  printSummary(results)
  return { results, alerts }
}

function compareWithPreviousWeek(results) {
  const prevDate = getPreviousWeekDate()
  const prevPath = resolve(historyDir, `${prevDate}.json`)
  if (!existsSync(prevPath)) {
    console.log(`\nNo previous week data (${prevDate}) — first run or gap in history.`)
    return []
  }

  const prev = JSON.parse(readFileSync(prevPath, 'utf8'))
  const prevMap = Object.fromEntries(prev.results.map((r) => [r.keyword, r.position]))

  const alerts = []
  for (const r of results) {
    const prevPos = prevMap[r.keyword]
    if (!prevPos || !r.position) continue
    const delta = r.position - prevPos
    if (delta >= config.alert_threshold.position_drop) {
      alerts.push(`DROP ${delta} positions: "${r.keyword}" — was #${prevPos}, now #${r.position}`)
    }
  }
  return alerts
}

function getPreviousWeekDate() {
  const d = new Date(today)
  d.setDate(d.getDate() - 7)
  return d.toISOString().slice(0, 10)
}

function printSummary(results) {
  const ranked = results.filter((r) => r.position !== null)
  const top10 = ranked.filter((r) => r.position <= 10)
  const top50 = ranked.filter((r) => r.position <= 50)
  const notRanking = results.filter((r) => r.position === null)

  console.log('\n=== SUMMARY ===')
  console.log(`  Total keywords tracked : ${results.length}`)
  console.log(`  Ranking (any position) : ${ranked.length}`)
  console.log(`  Top 10                 : ${top10.length}`)
  console.log(`  Top 50                 : ${top50.length}`)
  console.log(`  Not ranking            : ${notRanking.length}`)

  if (ranked.length) {
    console.log('\n  Top rankings:')
    const sorted = [...ranked].sort((a, b) => a.position - b.position)
    for (const r of sorted.slice(0, 5)) {
      console.log(`    #${String(r.position).padEnd(4)} ${r.keyword}`)
    }
  }
}

run().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
