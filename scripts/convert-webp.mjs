#!/usr/bin/env node
import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = 'public/Location Photos'
const EXCLUDE_DIR_NAMES = []
let converted = 0
let skipped = 0
let errors = []
let originalsTotal = 0

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
            originalsTotal++
            const webpPath = full.replace(/\.png$/i, '.webp')
            try {
                // If webp already exists and is newer than png, skip
                let need = true
                try {
                    const [statPng, statWebp] = await Promise.all([
                        fs.stat(full),
                        fs.stat(webpPath).catch(() => null),
                    ])
                    if (statWebp && statWebp.mtimeMs >= statPng.mtimeMs) {
                        need = false
                    }
                } catch {}
                if (!need) {
                    skipped++
                    continue
                }
                await sharp(full).webp({ quality: 85 }).toFile(webpPath)
                converted++
            } catch (e) {
                errors.push({ file: full, error: e.message })
            }
        }
    }
}

;(async () => {
    const start = Date.now()
    await walk(ROOT)
    const duration = ((Date.now() - start) / 1000).toFixed(2)
    const summary = {
        root: ROOT,
        originalsTotal,
        converted,
        skipped,
        errors: errors.length,
        durationSeconds: duration,
    }
    console.log(JSON.stringify(summary, null, 2))
    if (errors.length) {
        console.error('Conversion errors:')
        for (const e of errors) console.error(e.file, '->', e.error)
        process.exitCode = 1
    }
})()
