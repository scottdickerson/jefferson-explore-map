#!/usr/bin/env node
import { promises as fs } from 'node:fs'
import path from 'node:path'

const ROOT = 'public/Location Photos'
const EXCLUDE_DIR_NAMES = ['Pop-Up Photos']

let pngCount = 0
let missing = []

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            if (EXCLUDE_DIR_NAMES.includes(entry.name)) continue
            await walk(full)
            continue
        }
        if (entry.isFile() && entry.name.toLowerCase().endsWith('.png')) {
            pngCount++
            const webp = full.replace(/\.png$/i, '.webp')
            try {
                await fs.access(webp)
            } catch {
                missing.push(full)
            }
        }
    }
}

;(async () => {
    await walk(ROOT)
    const summary = { root: ROOT, pngCount, missingCount: missing.length }
    console.log(JSON.stringify(summary, null, 2))
    if (missing.length) {
        console.error('Missing .webp for:')
        for (const f of missing) console.error('  ', f)
        process.exitCode = 1
    }
})()
