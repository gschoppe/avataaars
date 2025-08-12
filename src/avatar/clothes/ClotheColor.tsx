import * as React from 'react'

import { ClotheColorOption, Selector } from '../../options'

export interface Props {
  uid: string
}

const clotheColorPalette: Map<string, any> = new Map()

export function makeClotheColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id={`${this.props.uid}-ClotheColor/${name}`}
          mask={`url(#${this.props.uid}-Clothing-Color-Mask)`}
          fillRule='evenodd'
          fill={color}>
          <rect id={`${this.props.uid}-🖍Color`} x='0' y='0' width='264' height='110' />
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  clotheColorPalette.set(name, anyComponent)

  return anyComponent
}

makeClotheColor('Black', '#262E33')
makeClotheColor('Blue01', '#65C9FF')
makeClotheColor('Blue02', '#5199E4')
makeClotheColor('Blue03', '#25557C')
makeClotheColor('Gray01', '#E6E6E6')
makeClotheColor('Gray02', '#929598')
makeClotheColor('Heather', '#3C4F5C')
makeClotheColor('PastelBlue', '#B1E2FF')
makeClotheColor('PastelGreen', '#A7FFC4')
makeClotheColor('PastelOrange', '#FFDEB5')
makeClotheColor('PastelRed', '#FFAFB9')
makeClotheColor('PastelYellow', '#FFFFB1')
makeClotheColor('Pink', '#FF488E')
makeClotheColor('Red', '#FF5C5C')
makeClotheColor('White', '#FFFFFF')

export default class ClotheColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={ClotheColorOption} defaultOption='Gray01'>
        {Array.from(clotheColorPalette.values()).map((ColorComponent, index) => (
          <ColorComponent key={index} uid={this.props.uid} />
        ))}
      </Selector>
    )
  }
}
