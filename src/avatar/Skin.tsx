import React from 'react'

import { Selector, SkinOption } from '../options'

export interface Props {
  uid: string
}

function makeSkinColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id={`Skin/${name}`}
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
  return anyComponent
}

const Tanned = makeSkinColor('Tanned', '#FD9841')
const Yellow = makeSkinColor('Yellow', '#F8D25C')
const Pale = makeSkinColor('Pale', '#FFDBB4')
const Light = makeSkinColor('Light', '#EDB98A')
const Brown = makeSkinColor('Brown', '#D08B5B')
const DarkBrown = makeSkinColor('DarkBrown', '#AE5D29')
const Black = makeSkinColor('Black', '#614335')

export default class Skin extends React.Component<Props> {
  render() {
    return (
      <Selector option={SkinOption} defaultOption={Light}>
        <Tanned uid={this.props.uid} />
        <Yellow uid={this.props.uid} />
        <Pale uid={this.props.uid} />
        <Light uid={this.props.uid} />
        <Brown uid={this.props.uid} />
        <DarkBrown uid={this.props.uid} />
        <Black uid={this.props.uid} />
      </Selector>
    )
  }
}
