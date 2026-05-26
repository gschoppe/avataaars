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

import express from 'express'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Resvg } from '@resvg/resvg-js'
import {
  Avatar,
  OptionContext,
  OptionsContext,
  allOptions,
  addPaletteColor,
  PALETTES
} from '../src/index'

const app = express()
const PORT = process.env.PORT || 3000

// Helper to determine if string represents a custom CSS color (hex, rgb/rgba, hsl/hsla, or transparent keyword)
function isCustomColor(str: string): boolean {
  const s = str.trim().toLowerCase()
  const isHex = /^#?[0-9A-Fa-f]{3}$|^#?[0-9A-Fa-f]{4}$|^#?[0-9A-Fa-f]{6}$|^#?[0-9A-Fa-f]{8}$/.test(s)
  const isRgb = /^rgba?\(.+\)$/i.test(s)
  const isHsl = /^hsla?\(.+\)$/i.test(s)
  const isTransparent = s === 'transparent'
  return isHex || isRgb || isHsl || isTransparent
}

function cleanCustomColor(str: string): string {
  const s = str.trim()
  const isHex = /^#?[0-9A-Fa-f]{3}$|^#?[0-9A-Fa-f]{4}$|^#?[0-9A-Fa-f]{6}$|^#?[0-9A-Fa-f]{8}$/.test(s)
  if (isHex) {
    return s.startsWith('#') ? s : `#${s}`
  }
  return s
}

app.get(['/api/avatar', '/api/avatar.svg', '/api/avatar.png', '/api/avatar.json'], async (req, res) => {
  try {
    const query = req.query as Record<string, string>
    
    // Determine the requested format
    let format = 'svg'
    const pathName = req.path
    if (pathName.endsWith('.svg')) {
      format = 'svg'
    } else if (pathName.endsWith('.png')) {
      format = 'png'
    } else if (pathName.endsWith('.json')) {
      format = 'json'
    } else if (query.format) {
      const qFormat = query.format.toLowerCase()
      if (['svg', 'png', 'json'].includes(qFormat)) {
        format = qFormat
      }
    }

    // Determine custom options from query
    const optionContext = new OptionContext(allOptions)
    const data: Record<string, string> = {}

    // Map query parameters case-insensitively
    const queryLower = Object.keys(query).reduce((acc, key) => {
      acc[key.toLowerCase()] = query[key]
      return acc
    }, {} as Record<string, string>)

    const colorKeys: Record<string, string> = {
      backdropcolor: PALETTES.BACKDROP,
      skincolor: PALETTES.SKIN,
      haircolor: PALETTES.HAIR,
      facialhaircolor: PALETTES.FACIAL_HAIR,
      clothecolor: PALETTES.CLOTHES,
      hatcolor: PALETTES.HAT,
    }

    allOptions.forEach((option) => {
      const lowerKey = option.key.toLowerCase()
      const queryVal = queryLower[lowerKey]
      if (queryVal) {
        // Handle custom color parameters dynamically (supports hex with alpha, rgb/rgba, hsl/hsla, transparent)
        if (colorKeys[lowerKey] && isCustomColor(queryVal)) {
          const cleanedColor = cleanCustomColor(queryVal)
          const cleanName = 'custom_' + cleanedColor.replace(/[^a-zA-Z0-9]/g, '_')
          // Register dynamic color in PALETTES
          addPaletteColor(colorKeys[lowerKey], cleanName, cleanedColor)
          data[option.key] = cleanName
        } else {
          data[option.key] = queryVal
        }
      }
    })

    // Set custom defaults
    if (!data.avatarStyle) data.avatarStyle = 'Transparent'
    
    optionContext.setData(data)

    // Determine customizable parameters not in options
    const uid = queryLower.uid || `api-${Math.random().toString(36).substring(2, 9)}`
    const animated = queryLower.animated === 'true'
    const size = queryLower.size ? parseInt(queryLower.size, 10) : 528

    // Render to static markup
    const svgMarkup = renderToStaticMarkup(
      React.createElement(
        OptionsContext.Provider,
        { value: optionContext },
        React.createElement(Avatar, {
          uid,
          animationDelay: '0s',
          animated,
        })
      )
    )

    // Format output
    const formattedSvg = svgMarkup
      .replace(/>\s*</g, '>\n<')
      .split('\n')
      .map((line) => line.trim())
      .join('\n')

    if (format === 'svg') {
      res.setHeader('Content-Type', 'image/svg+xml')
      return res.send(formattedSvg)
    }

    if (format === 'png') {
      const resvg = new Resvg(svgMarkup, {
        fitTo: {
          mode: 'width',
          value: size,
        }
      })
      const pngData = resvg.render()
      const pngBuffer = pngData.asPng()
      res.setHeader('Content-Type', 'image/png')
      return res.send(pngBuffer)
    }

    if (format === 'json') {
      res.setHeader('Content-Type', 'application/json')
      return res.json({
        success: true,
        uid,
        parameters: data,
        svg: formattedSvg,
      })
    }

    throw new Error('Unsupported format')
  } catch (err: any) {
    console.error('Error generating avatar:', err)
    res.status(500).json({
      success: false,
      error: err.message || 'Internal Server Error',
    })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Avataaars REST API Server running at http://localhost:${PORT}`)
})
