import * as React from 'react'

import { FacialHairColorOption, Selector } from '../../../options'

export interface Props {
  uid: string
}

const facialHairColorPalette: Map<string, any> = new Map()

export function makeFacialHairColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id={`${this.props.uid}-FacialHairColor/${name}`}
          mask={`url(#${this.props.uid}-Facial-Hair-Mask)`}
          fill={color}>
          <g transform='translate(-32.000000, 0.000000)' id={`${this.props.uid}-Facial-Hair-Color`}>
            <rect x='0' y='0' width='264' height='244' />
          </g>
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  facialHairColorPalette.set(name, anyComponent)

  return anyComponent
}

makeFacialHairColor('Auburn', '#A55728')
makeFacialHairColor('Black', '#2C1B18')
makeFacialHairColor('Blonde', '#B58143')
makeFacialHairColor('BlondeGolden', '#D6B370')
makeFacialHairColor('Brown', '#724133')
makeFacialHairColor('BrownDark', '#4A312C')
makeFacialHairColor('Platinum', '#ECDCBF')
makeFacialHairColor('Red', '#C93305')
makeFacialHairColor('SilverGray', '#E8E1E1')

export default class FacialHairColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={FacialHairColorOption} defaultOption='BrownDark'>
        {Array.from(facialHairColorPalette.values()).map((ColorComponent, index) => (
          <ColorComponent key={index} uid={this.props.uid} />
        ))}
      </Selector>
    )
  }
}
