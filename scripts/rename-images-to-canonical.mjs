#!/usr/bin/env node
import { promises as fs } from 'node:fs'
import path from 'node:path'

// Dynamically derive canonical stems from siteData.tsx instead of hardcoding.
// We parse the file for any /Location Photos/* pattern ending with _Color|_Sepia|_Pop-Up.<ext>

const ROOT = 'public/Location Photos'
const SITE_DATA_PATH = 'src/data/siteData.tsx'

const TYPE_CONFIG = [
    { dir: 'Color Photos', suffix: '_Color', exts: ['webp', 'png'] },
    { dir: 'Sepia Photos', suffix: '_Sepia', exts: ['webp', 'png'] },
    { dir: 'Pop-Up Photos', suffix: '_Pop-Up', exts: ['png', 'webp'] },
]

// Aliases help match drastically shortened filenames.
const STEM_ALIASES = {
    'House-Of-Seasons': ['Seasons'],
    'Singletons-Virginia-Cross-House': ['Singletons'],
    'Cumberland-Presbyterian-Church': ['Presbyterian'],
    'Union-Missionary-Baptist-Church': ['Union-baptist', 'Union'],
    'Excelsior-Hotel': ['Excelsior'],
    'Planters-Bank-Building': ['Planters-bank'],
    'Immaculate-Conception-Church': [
        'Immaculate_conception_church',
        'Immaculate',
        'Immaculate-conception-church',
    ],
    'WP-Schluter-House': [
        'Schluter',
        'Schluter_House',
        'Schluter-sepia',
        'Schluter_Color',
    ],
    'First-Baptist-Church': ['First-baptist'],
    'First-Methodist-Church': ['First-methodist'],
    'Historic-Kahn-Hotel': ['kahn-hotel', 'kahn'],
}

function normalize(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
}

async function readSiteData() {
    const raw = await fs.readFile(SITE_DATA_PATH, 'utf8')
    const regex =
        /\/Location Photos\/(?:Color Photos|Sepia Photos|Pop-Up Photos)\/([^\n"']+?)_(?:Color|Sepia|Pop-Up)\.(?:webp|png)/g
    const stems = new Set()
    let m
    while ((m = regex.exec(raw))) {
        stems.add(m[1])
    }
    return Array.from(stems).sort()
}

// Build index of existing files (relative to ROOT)
const existingIndex = {} // rel -> full path
async function indexFiles() {
    async function walk(dir) {
        const entries = await fs.readdir(dir, { withFileTypes: true })
        for (const e of entries) {
            const full = path.join(dir, e.name)
            if (e.isDirectory()) await walk(full)
            else {
                const rel = path.relative(ROOT, full)
                existingIndex[rel] = full
            }
        }
    }
    await walk(ROOT)
}

function collectCandidatesForDir(dir) {
    return Object.keys(existingIndex).filter((r) => r.startsWith(dir + '/')) // e.g. 'Color Photos/...'
}

function baseNameNoExt(rel) {
    return path.basename(rel).replace(/\.[^.]+$/, '')
}

function stripVariant(base) {
    return base.replace(/_(Color|Sepia|Pop-Up)$/i, '')
}

function hasCanonical(rel, stem, suffix) {
    const base = baseNameNoExt(rel)
    return base === stem + suffix
}

function scoreMatch(canonStem, candidateBase) {
    const canonNorm = normalize(canonStem)
    const candNorm = normalize(stripVariant(candidateBase))
    if (canonNorm === candNorm) return 100 // exact
    const cTokens = canonNorm.split('-')
    const dTokens = candNorm.split('-')
    const overlap = cTokens.filter((t) => dTokens.includes(t)).length
    const coverage = overlap / cTokens.length
    // Weight by coverage and token count similarity
    return Math.round(
        coverage * 100 - Math.abs(cTokens.length - dTokens.length) * 2
    )
}

function aliasMatch(stem, candidateBase) {
    const aliases = STEM_ALIASES[stem]
    if (!aliases) return false
    const cand = stripVariant(candidateBase).toLowerCase()
    return aliases.some((a) => cand.includes(a.toLowerCase()))
}

function findBestCandidate(stem, dir, suffix, ext) {
    const candidates = collectCandidatesForDir(dir).filter((rel) =>
        rel.toLowerCase().endsWith('.' + ext)
    )
    // Exclude already canonical
    const filtered = candidates.filter(
        (rel) => !hasCanonical(rel, stem, suffix)
    )
    let scored = filtered.map((rel) => {
        const base = baseNameNoExt(rel)
        return { rel, base, score: scoreMatch(stem, base) }
    })
    // Boost alias hits
    scored.forEach((o) => {
        if (aliasMatch(stem, o.base)) o.score += 25
    })
    scored = scored.filter((o) => o.score >= 30) // threshold lowered to capture short forms
    scored.sort((a, b) => b.score - a.score)
    return scored[0]
}

async function ensureDir(p) {
    await fs.mkdir(path.dirname(p), { recursive: true })
}

async function main() {
    const stems = await readSiteData()
    await indexFiles()
    const plan = []
    for (const stem of stems) {
        for (const t of TYPE_CONFIG) {
            for (const ext of t.exts) {
                const targetRel = path.join(t.dir, `${stem}${t.suffix}.${ext}`)
                const targetFull = path.join(ROOT, targetRel)
                try {
                    await fs.access(targetFull)
                    continue
                } catch {}
                const best = findBestCandidate(stem, t.dir, t.suffix, ext)
                if (!best) continue
                plan.push({ from: best.rel, to: targetRel, score: best.score })
            }
        }
    }
    if (!plan.length) {
        console.log('No rename actions needed.')
        return
    }
    console.log('Planned renames (dry-run)')
    for (const { from, to, score } of plan) {
        console.log(`${from} => ${to} (score:${score})`)
    }
    if (process.argv.includes('--apply')) {
        for (const { from, to } of plan) {
            const src = existingIndex[from]
            const dest = path.join(ROOT, to)
            await ensureDir(dest)
            try {
                await fs.rename(src, dest)
            } catch (e) {
                console.error('Failed rename', src, '->', dest, e.message)
            }
        }
        console.log('Rename operations applied.')
    } else {
        console.log('\nRun with --apply to perform these renames.')
    }
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})
