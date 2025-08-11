import * as React from 'react'

import { HairColorOption, Selector } from '../../options'

export interface Props {
  uid: string
}

function makeHairColor(name: string, color: string) {
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
  return anyComponent
}

const Auburn = makeHairColor('Auburn', '#A55728')
const Black = makeHairColor('Black', '#2C1B18')
const Blonde = makeHairColor('Blonde', '#B58143')
const BlondeGolden = makeHairColor('BlondeGolden', '#D6B370')
const Brown = makeHairColor('Brown', '#724133')
const BrownDark = makeHairColor('BrownDark', '#4A312C')
const PastelPink = makeHairColor('PastelPink', '#F59797')
const Blue = makeHairColor('Blue', '#000fdb')
const Platinum = makeHairColor('Platinum', '#ECDCBF')
const Red = makeHairColor('Red', '#C93305')
const SilverGray = makeHairColor('SilverGray', '#E8E1E1')

export default class HairColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={HairColorOption} defaultOption={BrownDark}>
        <Auburn uid={this.props.uid} />
        <Black uid={this.props.uid} />
        <Blonde uid={this.props.uid} />
        <BlondeGolden uid={this.props.uid} />
        <Brown uid={this.props.uid} />
        <BrownDark uid={this.props.uid} />
        <PastelPink uid={this.props.uid} />
        <Blue uid={this.props.uid} />
        <Platinum uid={this.props.uid} />
        <Red uid={this.props.uid} />
        <SilverGray uid={this.props.uid} />
      </Selector>
    )
  }
}
