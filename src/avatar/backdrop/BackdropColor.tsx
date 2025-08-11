import React from 'react'

import { BackdropColorOption, Selector } from '../../options'

export interface Props {
  uid: string
  defaultColor?: string
}

function makeBackdropColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id={`${this.props.uid}-BackdropColor/${name}`}
          mask={`url(#${this.props.uid}-Backdrop-Color-Mask)`}
          fill={color}>
          <rect id={`${this.props.uid}-🖍Color`} x="0" y="0" width="240" height="240" />
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

const Black = makeBackdropColor('Black', '#262E33')
const Blue01 = makeBackdropColor('Blue01', '#65C9FF')
const Blue02 = makeBackdropColor('Blue02', '#5199E4')
const Blue03 = makeBackdropColor('Blue03', '#25557C')
const Gray01 = makeBackdropColor('Gray01', '#E6E6E6')
const Gray02 = makeBackdropColor('Gray02', '#929598')
const Heather = makeBackdropColor('Heather', '#3C4F5C')
const PastelBlue = makeBackdropColor('PastelBlue', '#B1E2FF')
const PastelGreen = makeBackdropColor('PastelGreen', '#A7FFC4')
const PastelOrange = makeBackdropColor('PastelOrange', '#FFDEB5')
const PastelRed = makeBackdropColor('PastelRed', '#FFAFB9')
const PastelYellow = makeBackdropColor('PastelYellow', '#FFFFB1')
const Pink = makeBackdropColor('Pink', '#FF488E')
const Red = makeBackdropColor('Red', '#FF5C5C')
const White = makeBackdropColor('White', '#FFFFFF')

export default class BackdropColor extends React.Component<Props> {
  render() {
    return (
      <Selector
        option={BackdropColorOption}
        defaultOption={this.props.defaultColor || Blue01}>
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