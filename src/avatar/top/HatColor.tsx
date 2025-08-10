import * as React from 'react'

import { HatColorOption, Selector } from '../../options'

export interface Props {
  uid: string
  defaultColor?: string
}

function makeColor (name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render () {
      return (
        <g
          id={`Color/Palette/${name}`}
          mask={`url(#${this.props.uid}-Hat-Color-Mask)`}
          fillRule='evenodd'
          fill={color}>
          <rect id={`${this.props.uid}-🖍Color`} x='0' y='0' width='264' height='280' />
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

const Black = makeColor('Black', '#262E33')
const Blue01 = makeColor('Blue01', '#65C9FF')
const Blue02 = makeColor('Blue02', '#5199E4')
const Blue03 = makeColor('Blue03', '#25557C')
const Gray01 = makeColor('Gray01', '#E6E6E6')
const Gray02 = makeColor('Gray02', '#929598')
const Heather = makeColor('Heather', '#3C4F5C')
const PastelBlue = makeColor('PastelBlue', '#B1E2FF')
const PastelGreen = makeColor('PastelGreen', '#A7FFC4')
const PastelOrange = makeColor('PastelOrange', '#FFDEB5')
const PastelRed = makeColor('PastelRed', '#FFAFB9')
const PastelYellow = makeColor('PastelYellow', '#FFFFB1')
const Pink = makeColor('Pink', '#FF488E')
const Red = makeColor('Red', '#FF5C5C')
const White = makeColor('White', '#FFFFFF')

export default class Colors extends React.Component<Props> {
  render() {
    return (
      <Selector
        option={HatColorOption}
        defaultOption={this.props.defaultColor || Gray01}>
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