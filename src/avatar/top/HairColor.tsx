import * as React from 'react'

import { HairColorOption, Selector } from '../../options'

export interface Props {
  uid: string
}

const hairColorPalette: Map<string, any> = new Map()

export function makeHairColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id={`${this.props.uid}-HairColor/${name}`}
          mask={`url(#${this.props.uid}-Hair-Color-Mask)`}
          fill={color}>
          <g transform='translate(0.000000, 0.000000) ' id='Color'>
            <rect x='0' y='0' width='264' height='280' />
          </g>
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  hairColorPalette.set(name, anyComponent)

  return anyComponent
}

makeHairColor('Auburn', '#A55728')
makeHairColor('Black', '#2C1B18')
makeHairColor('Blonde', '#B58143')
makeHairColor('BlondeGolden', '#D6B370')
makeHairColor('Brown', '#724133')
makeHairColor('BrownDark', '#4A312C')
makeHairColor('PastelPink', '#F59797')
makeHairColor('Blue', '#000fdb')
makeHairColor('Platinum', '#ECDCBF')
makeHairColor('Red', '#C93305')
makeHairColor('SilverGray', '#E8E1E1')

export default class HairColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={HairColorOption} defaultOption='BrownDark'>
        {Array.from(hairColorPalette.values()).map((ColorComponent, index) => (
          <ColorComponent key={index} uid={this.props.uid} />
        ))}
      </Selector>
    )
  }
}
