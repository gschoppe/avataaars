import * as React from 'react'

import { ClotheColorOption, Selector } from '../../options'

export interface Props {
  uid: string
}

function makeClotheColor(name: string, color: string) {
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
  return anyComponent
}

const Black = makeClotheColor('Black', '#262E33')
const Blue01 = makeClotheColor('Blue01', '#65C9FF')
const Blue02 = makeClotheColor('Blue02', '#5199E4')
const Blue03 = makeClotheColor('Blue03', '#25557C')
const Gray01 = makeClotheColor('Gray01', '#E6E6E6')
const Gray02 = makeClotheColor('Gray02', '#929598')
const Heather = makeClotheColor('Heather', '#3C4F5C')
const PastelBlue = makeClotheColor('PastelBlue', '#B1E2FF')
const PastelGreen = makeClotheColor('PastelGreen', '#A7FFC4')
const PastelOrange = makeClotheColor('PastelOrange', '#FFDEB5')
const PastelRed = makeClotheColor('PastelRed', '#FFAFB9')
const PastelYellow = makeClotheColor('PastelYellow', '#FFFFB1')
const Pink = makeClotheColor('Pink', '#FF488E')
const Red = makeClotheColor('Red', '#FF5C5C')
const White = makeClotheColor('White', '#FFFFFF')

export default class ClotheColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={ClotheColorOption} defaultOption={Gray01}>
        <Black uid={this.props.uid} />
        <Blue01 uid={this.props.uid} />
        <Blue02 uid={this.props.uid} />
        <Blue03 uid={this.props.uid} />
        <Gray01 uid={this.props.uid} />
        <Gray02 uid={this.props.uid} />
        <Heather uid={this.props.uid} />
        <PastelBlue uid={this.props.uid} />
        <PastelGreen uid={this.props.uid} />
        <PastelOrange uid={this.props.uid} />
        <PastelRed uid={this.props.uid} />
        <PastelYellow uid={this.props.uid} />
        <Pink uid={this.props.uid} />
        <Red uid={this.props.uid} />
        <White uid={this.props.uid} />
      </Selector>
    )
  }
}
