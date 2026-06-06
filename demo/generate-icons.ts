import { createRequire } from 'module'
import * as path from 'path'
import * as fs from 'fs'

const require = createRequire(import.meta.url)
const Module = require('module')

// Force all resolves of 'react' and 'react-dom' to use the ones in demo/node_modules
const demoNodeModules = path.resolve(process.cwd(), 'node_modules')
const demoReactPath = path.join(demoNodeModules, 'react')
const demoReactDOMPath = path.join(demoNodeModules, 'react-dom')
const demoReactDOMServerPath = path.join(demoNodeModules, 'react-dom/server')

const originalResolve = Module._resolveFilename
Module._resolveFilename = function (request: string, parent: any, isMain: boolean, options: any) {
  if (request === 'react') {
    return require.resolve(demoReactPath)
  }
  if (request === 'react-dom') {
    return require.resolve(demoReactDOMPath)
  }
  if (request === 'react-dom/server') {
    return require.resolve(demoReactDOMServerPath)
  }
  return originalResolve.call(this, request, parent, isMain, options)
}

// Now dynamically import the rest of our modules to prevent hoisting before resolution interceptor is active
const React = (await import('react')).default
const { renderToStaticMarkup } = await import('react-dom/server')
const {
  Piece,
  BACKDROP_TYPES,
  BACKDROP_COLORS,
  TOP_TYPES,
  HAIR_COLORS,
  FACIAL_HAIR_TYPES,
  CLOTHE_TYPES,
  CLOTHE_COLORS,
  ACCESSORIES_TYPES,
  GRAPHIC_TYPES,
  EYE_TYPES,
  EYEBROW_TYPES,
  MOUTH_TYPES,
  SKIN_COLORS
} = await import('../src/index')

const outputDir = path.resolve(process.cwd(), '../docs/icons')

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

ensureDir(outputDir)

// Define specific render helpers for categories:
const renderPiece = (type: string, props: Record<string, string>) => {
  try {
    const markup = renderToStaticMarkup(
      React.createElement(Piece, {
        pieceType: type,
        pieceSize: '100',
        ...props
      })
    )
    return markup
  } catch (e) {
    console.error(`Error rendering piece ${type} with props:`, props, e)
    return ''
  }
}

// Generate Icons for each category:
// 1. Mouth
console.log('Generating mouth icons...')
ensureDir(path.join(outputDir, 'mouth'))
MOUTH_TYPES.forEach((mouth) => {
  const svg = renderPiece('mouth', { mouthType: mouth })
  fs.writeFileSync(path.join(outputDir, 'mouth', `${mouth}.svg`), svg)
})

// 2. Eyes
console.log('Generating eye icons...')
ensureDir(path.join(outputDir, 'eyes'))
EYE_TYPES.forEach((eye) => {
  const svg = renderPiece('eyes', { eyeType: eye })
  fs.writeFileSync(path.join(outputDir, 'eyes', `${eye}.svg`), svg)
})

// 3. Eyebrows
console.log('Generating eyebrow icons...')
ensureDir(path.join(outputDir, 'eyebrows'))
EYEBROW_TYPES.forEach((eyebrow) => {
  const svg = renderPiece('eyebrows', { eyebrowType: eyebrow })
  fs.writeFileSync(path.join(outputDir, 'eyebrows', `${eyebrow}.svg`), svg)
})

// 4. Accessories
console.log('Generating accessories icons...')
ensureDir(path.join(outputDir, 'accessories'))
ACCESSORIES_TYPES.forEach((acc) => {
  const svg = renderPiece('accessories', { accessoriesType: acc })
  fs.writeFileSync(path.join(outputDir, 'accessories', `${acc}.svg`), svg)
})

// 5. Clothes
console.log('Generating clothing icons...')
ensureDir(path.join(outputDir, 'clothe'))
CLOTHE_TYPES.forEach((clothe) => {
  const svg = renderPiece('clothe', { clotheType: clothe, clotheColor: 'Gray01' })
  fs.writeFileSync(path.join(outputDir, 'clothe', `${clothe}.svg`), svg)
})

// 6. Graphics
console.log('Generating graphic icons...')
ensureDir(path.join(outputDir, 'graphics'))
GRAPHIC_TYPES.forEach((graphic) => {
  const svg = renderPiece('graphics', { clotheType: 'GraphicShirt', graphicType: graphic })
  fs.writeFileSync(path.join(outputDir, 'graphics', `${graphic}.svg`), svg)
})

// 7. Facial Hair
console.log('Generating facial hair icons...')
ensureDir(path.join(outputDir, 'facialHair'))
FACIAL_HAIR_TYPES.forEach((fh) => {
  const svg = renderPiece('facialHair', { facialHairType: fh, facialHairColor: 'Black' })
  fs.writeFileSync(path.join(outputDir, 'facialHair', `${fh}.svg`), svg)
})

// 8. Top (Hair / Hats)
console.log('Generating top icons...')
ensureDir(path.join(outputDir, 'top'))
TOP_TYPES.forEach((top) => {
  const svg = renderPiece('top', { topType: top, hairColor: 'Black', hatColor: 'Black' })
  fs.writeFileSync(path.join(outputDir, 'top', `${top}.svg`), svg)
})

// 9. Skin (rendered as a circle of skinColor)
console.log('Generating skin color icons...')
ensureDir(path.join(outputDir, 'skin'))
const skinMap: Record<string, string> = {
  Tanned: '#FD9841',
  Yellow: '#F8D25C',
  Pale: '#FFDBB4',
  Light: '#EDB98A',
  Brown: '#D08B5B',
  DarkBrown: '#AE5D29',
  Black: '#614335'
}
Object.entries(skinMap).forEach(([name, color]) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
  <circle cx="12" cy="12" r="10" fill="${color}" stroke="#ccc" stroke-width="1" />
</svg>`
  fs.writeFileSync(path.join(outputDir, 'skin', `${name}.svg`), svg)
})

// 10. Backdrop type
console.log('Generating backdrop type icons...')
ensureDir(path.join(outputDir, 'backdrop'))
fs.writeFileSync(path.join(outputDir, 'backdrop', 'Circle.svg'), 
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="48" height="48">
    <circle cx="50" cy="50" r="45" fill="#5199E4" stroke="#fff" stroke-width="2" />
  </svg>`
)
fs.writeFileSync(path.join(outputDir, 'backdrop', 'Diamond.svg'), 
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="48" height="48">
    <rect x="25" y="25" width="50" height="50" rx="6" transform="rotate(45 50 50)" fill="#5199E4" stroke="#fff" stroke-width="2" />
  </svg>`
)
fs.writeFileSync(path.join(outputDir, 'backdrop', 'NoBackdrop.svg'), 
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="48" height="48">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#ccc" stroke-width="2" stroke-dasharray="4" />
    <line x1="18" y1="18" x2="82" y2="82" stroke="#ccc" stroke-width="2" />
  </svg>`
)

// 11. Colors (for backdropColor, hatColor, hairColor, facialHairColor, clotheColor)
console.log('Generating color swatches...')
ensureDir(path.join(outputDir, 'colors'))
const allColors: Record<string, string> = {
  // Backdrops / Hats / Clothes colors
  Black: '#262E33',
  Blue01: '#65C9FF',
  Blue02: '#5199E4',
  Blue03: '#25557C',
  Gray01: '#E6E6E6',
  Gray02: '#929598',
  Heather: '#3C4F5C',
  PastelBlue: '#B1E2FF',
  PastelGreen: '#A7FFC4',
  PastelOrange: '#FFDEB5',
  PastelRed: '#FFAFB9',
  PastelYellow: '#FFFFB1',
  Pink: '#FF488E',
  Red: '#FF5C5C',
  White: '#FFFFFF',
  // Hair colors
  Auburn: '#A55728',
  Blonde: '#B58143',
  BlondeGolden: '#D6B370',
  Brown: '#724133',
  BrownDark: '#4A312C',
  PastelPink: '#F59797',
  Blue: '#000fdb',
  Platinum: '#ECDCBF',
  SilverGray: '#E8E1E1'
}
Object.entries(allColors).forEach(([name, color]) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="10" fill="${color}" stroke="#ccc" stroke-width="1" />
</svg>`
  fs.writeFileSync(path.join(outputDir, 'colors', `${name}.svg`), svg)
})

console.log('All icons generated successfully.')
