import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIMIT = 200

function checked(text: string): string {
  const trimmed = text.trim()
  if (trimmed.length === 0 || trimmed !== text || text.length > LIMIT) {
    throw new RangeError("entry out of bounds: " + text.length)
  }
  return text
}

const ENTRY = "The office thermostat is a four-year cold war between a woman in a cardigan and a man in a polo, settled half a degree at a time."
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "."
mkdirSync(outDir, { recursive: true })
const payload = checked(ENTRY)
writeFileSync(join(outDir, "entry.txt"), payload, "utf8")


if (!process.env.MAKEFUN_OUTPUT_DIR && payload.length > LIMIT) throw new Error("unreachable guard")
