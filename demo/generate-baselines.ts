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

// Now safely import the rest of our modules
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Resvg } from '@resvg/resvg-js'
import { DEBUG_CONFIGS, CUSTOM_COLORS } from './src/debugConfigs'
import {
  Avatar,
  OptionContext,
  OptionsContext,
  allOptions,
  addPaletteColor,
  PALETTES
} from '../src/index'

const targetDirArg = process.argv[2]
if (!targetDirArg) {
  console.error('Error: Please specify target baseline directory as argument.')
  process.exit(1)
}

const targetDir = path.resolve(process.cwd(), targetDirArg)

// Ensure output directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

// Register all custom palette colors
CUSTOM_COLORS.forEach(({ palette, name, color }) => {
  const paletteKey = palette as keyof typeof PALETTES
  addPaletteColor(PALETTES[paletteKey], name, color)
})

console.log(`Generating 32 deterministic baseline SVGs in ${targetDir}...`)

DEBUG_CONFIGS.forEach((config) => {
  // Create options context for each config
  const optionContext = new OptionContext(allOptions)
  const data: Record<string, string> = {}
  
  allOptions.forEach((option) => {
    const value = (config as any)[option.key]
    if (value) {
      data[option.key] = value
    }
  })
  
  optionContext.setData(data)

  // Render to static markup using static uid and animationDelay to be perfectly deterministic
  const svgMarkup = renderToStaticMarkup(
    React.createElement(
      OptionsContext.Provider,
      { value: optionContext },
      React.createElement(Avatar, {
        uid: config.id,
        animationDelay: '0s',
      })
    )
  )

  const formattedSvg = svgMarkup
    .replace(/>\s*</g, '>\n<')
    .split('\n')
    .map((line) => line.trim())
    .join('\n')

  const outputPath = path.join(targetDir, `${config.id}.svg`)
  fs.writeFileSync(outputPath, formattedSvg, 'utf8')
  
  // Render PNG using resvg for pixel-level visual validation
  try {
    const resvg = new Resvg(svgMarkup, {
      fitTo: {
        mode: 'width',
        value: 528 * 2, // 1056px high-resolution PNG
      }
    })
    const pngData = resvg.render()
    const pngBuffer = pngData.asPng()
    const pngOutputPath = path.join(targetDir, `${config.id}.png`)
    fs.writeFileSync(pngOutputPath, pngBuffer)
    console.log(`- Saved ${config.id}.svg and ${config.id}.png`)
  } catch (err) {
    console.error(`Failed to render PNG for ${config.id}:`, err)
  }
})

console.log('All baseline SVGs and PNGs generated successfully.')
