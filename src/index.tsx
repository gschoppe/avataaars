import * as React from 'react'
import { useMemo } from 'react'

import Avatar from './avatar'
import { OptionContext, OptionsContext, allOptions } from './options'

import { makeBackdropColor } from './avatar/backdrop/BackdropColor'
import { makeSkinColor } from './avatar/Skin'
import { makeHairColor } from './avatar/top/HairColor'
import { makeFacialHairColor } from './avatar/top/facialHair/FacialHairColor'
import { makeClotheColor } from './avatar/clothes/ClotheColor'
import { makeHatColor } from './avatar/top/HatColor'

export { default as Avatar } from './avatar'
export { Option, OptionContext, OptionsContext, allOptions } from './options'

import { default as PieceComponent } from './avatar/piece'

export const PALETTES = {
  BACKDROP: "BACKDROP",
  SKIN: "SKIN",
  HAIR: "HAIR",
  FACIAL_HAIR: "FACIAL_HAIR",
  CLOTHES: "CLOTHES",
  HAT: "HAT"
}

export function addPaletteColor(palette: string, name: string, color?: string | GradientConfig) {
  let resolvedColor: string
  if (color === undefined) {
    if (registeredGradients.has(name)) {
      resolvedColor = `url(#${name})`
    } else {
      throw new Error(`Color parameter is required unless '${name}' is a registered gradient.`)
    }
  } else if (typeof color === 'object' && color !== null) {
    registerGradient(name, color)
    resolvedColor = `url(#${name})`
  } else {
    resolvedColor = color
  }

  switch (palette) {
    case PALETTES.BACKDROP:
      return makeBackdropColor(name, resolvedColor)
    case PALETTES.SKIN:
      return makeSkinColor(name, resolvedColor)
    case PALETTES.HAIR:
      return makeHairColor(name, resolvedColor)
    case PALETTES.FACIAL_HAIR:
      return makeFacialHairColor(name, resolvedColor)
    case PALETTES.CLOTHES:
      return makeClotheColor(name, resolvedColor)
    case PALETTES.HAT:
      return makeHatColor(name, resolvedColor)
    default:
      throw new Error(`Unknown palette: ${palette}`)
  }
}

export interface Props {
  [key: string]: any
  className?: string
  style?: React.CSSProperties
  backdropType?: string
  backdropColor?: string
  topType?: string
  accessoriesType?: string
  hairColor?: string
  hatColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
  uid?: string
}

export const AvatarComponent: React.FC<Props> = (props) => {
  const { style, className } = props
  const optionContext = useMemo(() => new OptionContext(allOptions), [])

  const data: { [index: string]: string } = {}
  for (const option of allOptions) {
    const value = props[option.key]
    if (value) {
      data[option.key] = value
    }
  }
  optionContext.setData(data)

  return (
    <OptionsContext.Provider value={optionContext}>
      <Avatar
        style={style}
        className={className}
      />
    </OptionsContext.Provider>
  )
}

export default AvatarComponent

export const Piece: React.FC<Props> = (props) => {
  const { style, pieceType, pieceSize, viewBox } = props
  const optionContext = useMemo(() => new OptionContext(allOptions), [])

  const data: { [index: string]: string } = {}
  for (const option of allOptions) {
    const value = props[option.key]
    if (value) {
      data[option.key] = value
    }
  }
  optionContext.setData(data)

  return (
    <OptionsContext.Provider value={optionContext}>
      <PieceComponent
        style={style}
        pieceType={pieceType}
        pieceSize={pieceSize}
        viewBox={viewBox}
      />
    </OptionsContext.Provider>
  )
}

import { backdropColorPalette } from './avatar/backdrop/BackdropColor'
import { skinColorPalette } from './avatar/Skin'
import { hairColorPalette } from './avatar/top/HairColor'
import { facialHairColorPalette } from './avatar/top/facialHair/FacialHairColor'
import { clotheColorPalette } from './avatar/clothes/ClotheColor'
import { hatColorPalette } from './avatar/top/HatColor'

export function removePaletteColor(palette: string, name: string) {
  switch (palette) {
    case PALETTES.BACKDROP:
      backdropColorPalette.delete(name)
      break
    case PALETTES.SKIN:
      skinColorPalette.delete(name)
      break
    case PALETTES.HAIR:
      hairColorPalette.delete(name)
      break
    case PALETTES.FACIAL_HAIR:
      facialHairColorPalette.delete(name)
      break
    case PALETTES.CLOTHES:
      clotheColorPalette.delete(name)
      break
    case PALETTES.HAT:
      hatColorPalette.delete(name)
      break
  }
}

export interface GradientStop {
  offset: string
  color: string
  opacity?: number | string
}

export interface GradientConfig {
  type: 'linear' | 'radial'
  attrs?: Record<string, any>
  stops: GradientStop[]
}

export const registeredGradients: Map<string, GradientConfig> = new Map()

export function registerGradient(name: string, config: GradientConfig) {
  registeredGradients.set(name, config)
}
