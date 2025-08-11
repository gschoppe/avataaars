import * as React from 'react'

import { FacialHairColorOption, Selector } from '../../../options'

export interface Props {
  uid: string
}

function makeFacialHairColor(name: string, color: string) {
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
  return anyComponent
}

const Auburn = makeFacialHairColor('Auburn', '#A55728')
const Black = makeFacialHairColor('Black', '#2C1B18')
const Blonde = makeFacialHairColor('Blonde', '#B58143')
const BlondeGolden = makeFacialHairColor('BlondeGolden', '#D6B370')
const Brown = makeFacialHairColor('Brown', '#724133')
const BrownDark = makeFacialHairColor('BrownDark', '#4A312C')
const Platinum = makeFacialHairColor('Platinum', '#ECDCBF')
const Red = makeFacialHairColor('Red', '#C93305')
const SilverGray = makeFacialHairColor('SilverGray', '#E8E1E1')

export default class FacialHairColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={FacialHairColorOption} defaultOption={BrownDark}>
        <Auburn uid={this.props.uid} />
        <Black uid={this.props.uid} />
        <Blonde uid={this.props.uid} />
        <BlondeGolden uid={this.props.uid} />
        <Brown uid={this.props.uid} />
        <BrownDark uid={this.props.uid} />
        <Platinum uid={this.props.uid} />
        <Red uid={this.props.uid} />
        <SilverGray uid={this.props.uid} />
      </Selector>
    )
  }
}
