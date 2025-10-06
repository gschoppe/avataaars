import React from 'react'

import { BackdropColorOption, Selector } from '../../options'

export interface Props {
  uid: string
  defaultColor?: string
}

const backdropColorPalette: Map<string, any> = new Map()

export function makeBackdropColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id={`${this.props.uid}-BackdropColor/${name}`}
          mask={`url(#${this.props.uid}-Backdrop-Color-Mask)`}
          fill={color}>
          <rect id={`${this.props.uid}-🖍Color`} x="0" y="0" width="280" height="280" />
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  backdropColorPalette.set(name, anyComponent)

  return anyComponent
}

makeBackdropColor('Black', '#262E33')
makeBackdropColor('Blue01', '#65C9FF')
makeBackdropColor('Blue02', '#5199E4')
makeBackdropColor('Blue03', '#25557C')
makeBackdropColor('Gray01', '#E6E6E6')
makeBackdropColor('Gray02', '#929598')
makeBackdropColor('Heather', '#3C4F5C')
makeBackdropColor('PastelBlue', '#B1E2FF')
makeBackdropColor('PastelGreen', '#A7FFC4')
makeBackdropColor('PastelOrange', '#FFDEB5')
makeBackdropColor('PastelRed', '#FFAFB9')
makeBackdropColor('PastelYellow', '#FFFFB1')
makeBackdropColor('Pink', '#FF488E')
makeBackdropColor('Red', '#FF5C5C')
makeBackdropColor('White', '#FFFFFF')

export default class BackdropColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={BackdropColorOption} defaultOption={this.props.defaultColor || 'Blue01'}>
        {Array.from(backdropColorPalette.values()).map((ColorComponent, index) => {
          return <ColorComponent key={index} uid={this.props.uid} />
        })}
      </Selector>
    )
  }
}