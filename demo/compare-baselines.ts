import * as fs from 'fs'
import * as path from 'path'
import { PNG } from 'pngjs'
import pixelmatch from 'pixelmatch'
import { DEBUG_CONFIGS } from './src/debugConfigs'

const masterDir = path.resolve(process.cwd(), '../baselines/master')
const refactorDir = path.resolve(process.cwd(), '../baselines/refactor')

console.log('Comparing master and refactor raster PNGs pixel-by-pixel...')

let totalMismatchedAvatars = 0

DEBUG_CONFIGS.forEach((config) => {
  const masterPath = path.join(masterDir, `${config.id}.png`)
  const refactorPath = path.join(refactorDir, `${config.id}.png`)

  if (!fs.existsSync(masterPath)) {
    console.error(`Error: Master baseline PNG does not exist for ${config.id}`)
    totalMismatchedAvatars++
    return
  }
  if (!fs.existsSync(refactorPath)) {
    console.error(`Error: Refactor baseline PNG does not exist for ${config.id}`)
    totalMismatchedAvatars++
    return
  }

  const img1 = PNG.sync.read(fs.readFileSync(masterPath))
  const img2 = PNG.sync.read(fs.readFileSync(refactorPath))
  
  const { width, height } = img1
  
  if (img2.width !== width || img2.height !== height) {
    console.error(`Error: Dimension mismatch for ${config.id}. Master: ${width}x${height}, Refactor: ${img2.width}x${img2.height}`)
    totalMismatchedAvatars++
    return
  }

  const diff = new PNG({ width, height })
  
  const mismatchedPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }
  )

  if (mismatchedPixels > 0) {
    totalMismatchedAvatars++
    const diffPath = path.join(refactorDir, `${config.id}-diff.png`)
    fs.writeFileSync(diffPath, PNG.sync.write(diff))
    console.error(`❌ Mismatch found in ${config.id}: ${mismatchedPixels} different pixels. Saved diff to ${config.id}-diff.png`)
  } else {
    console.log(`✅ ${config.id} matches perfectly (0 different pixels).`)
  }
})

if (totalMismatchedAvatars > 0) {
  console.error(`\nFailure: ${totalMismatchedAvatars} of 32 avatars had pixel differences.`)
  process.exit(1)
} else {
  console.log('\nSuccess: All 32 avatars are 100% pixel-identical!')
  process.exit(0)
}
