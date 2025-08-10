import * as React from 'react'

import { FacialHairColor, Selector } from '../../../options'

export interface Props {
  uid: string
}

function makeColor (name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render () {
      return (
        <g
          id={`${this.props.uid}-Color/Hair/${name}`}
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

const Auburn = makeColor('Auburn', '#A55728')
const Black = makeColor('Black', '#2C1B18')
const Blonde = makeColor('Blonde', '#B58143')
const BlondeGolden = makeColor('BlondeGolden', '#D6B370')
const Brown = makeColor('Brown', '#724133')
const BrownDark = makeColor('BrownDark', '#4A312C')
const Platinum = makeColor('Platinum', '#ECDCBF')
const Red = makeColor('Red', '#C93305')
const SilverGray = makeColor('SilverGray', '#E8E1E1')

export default class Colors extends React.Component<Props> {
  render () {
    return (
      <Selector option={FacialHairColor} defaultOption={BrownDark}>
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
