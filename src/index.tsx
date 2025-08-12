import * as React from 'react'

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

export function addPaletteColor(palette: string, name: string, color: string) {
  switch (palette) {
    case PALETTES.BACKDROP:
      return makeBackdropColor(name, color)
    case PALETTES.SKIN:
      return makeSkinColor(name, color)
    case PALETTES.HAIR:
      return makeHairColor(name, color)
    case PALETTES.FACIAL_HAIR:
      return makeFacialHairColor(name, color)
    case PALETTES.CLOTHES:
      return makeClotheColor(name, color)
    case PALETTES.HAT:
      return makeHatColor(name, color)
    default:
      throw new Error(`Unknown palette: ${palette}`)
  }
}

export interface Props {
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
}

export default class AvatarComponent extends React.Component<Props> {
  private optionContext: OptionContext = new OptionContext(allOptions)

  componentDidMount() {
    this.updateOptionContext(this.props)
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.updateOptionContext(this.props)
    }
  }

  render() {
    const { style, className } = this.props
    return (
      <OptionsContext.Provider value={this.optionContext}>
        <Avatar
          style={style}
          className={className}
        />
      </OptionsContext.Provider>
    )
  }

  private updateOptionContext(props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}

export class Piece extends React.Component<Props> {
  private optionContext: OptionContext = new OptionContext(allOptions)

  componentDidMount() {
    this.updateOptionContext(this.props)
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  render() {
    const { style, pieceType, pieceSize, viewBox } = this.props
    return (
      <OptionsContext.Provider value={this.optionContext}>
        <PieceComponent
          style={style}
          pieceType={pieceType}
          pieceSize={pieceSize}
          viewBox={viewBox}
        />
      </OptionsContext.Provider>
    )
  }

  private updateOptionContext(props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}
