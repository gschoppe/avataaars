import * as React from 'react'

import Avatar from './avatar'
import { OptionContext, OptionsContext, allOptions } from './options'

export { default as Avatar } from './avatar'
export { Option, OptionContext, OptionsContext, allOptions } from './options'

import { default as PieceComponent } from './avatar/piece'

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
