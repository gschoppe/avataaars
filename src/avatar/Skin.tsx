import React from 'react'

import { Selector, SkinOption } from '../options'

export interface Props {
  uid: string
}

const skinColorPalette: Map<string, any> = new Map()

export function makeSkinColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id={`${this.props.uid}-SkinColor/${name}`}
          mask={`url(#${this.props.uid}-Skin-Color-Mask)`}
          fill={color}>
          <g transform="translate(0.000000, 0.000000)" id="Color">
            <rect x="0" y="0" width="264" height="280" />
          </g>
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  skinColorPalette.set(name, anyComponent)

  return anyComponent
}

makeSkinColor('Tanned', '#FD9841')
makeSkinColor('Yellow', '#F8D25C')
makeSkinColor('Pale', '#FFDBB4')
makeSkinColor('Light', '#EDB98A')
makeSkinColor('Brown', '#D08B5B')
makeSkinColor('DarkBrown', '#AE5D29')
makeSkinColor('Black', '#614335')

export default class Skin extends React.Component<Props> {
  render() {
    return (
      <Selector option={SkinOption} defaultOption='Light'>
        {Array.from(skinColorPalette.values()).map((ColorComponent, index) => (
          <ColorComponent key={index} uid={this.props.uid} />
        ))}
      </Selector>
    )
  }
}
