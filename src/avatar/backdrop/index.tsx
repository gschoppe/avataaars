import React from 'react'
import { Selector, BackdropOption } from '../../options'
import { makeOptionComponent } from '../makeOptionComponent'

const NoBackdrop: React.FC<{ uid: string }> = () => null
const anyNoBackdrop = NoBackdrop as any
anyNoBackdrop.displayName = 'NoBackdrop'
anyNoBackdrop.optionValue = 'NoBackdrop'

const Circle = makeOptionComponent('BACKDROP', 'Circle')
const Diamond = makeOptionComponent('BACKDROP', 'Diamond')

export interface Props {
  uid: string
}

export default class Backdrop extends React.Component<Props> {
  render() {
    return (
      <Selector defaultOption={Diamond} option={BackdropOption}>
        <NoBackdrop uid={this.props.uid}></NoBackdrop>
        <Circle uid={this.props.uid}></Circle>
        <Diamond uid={this.props.uid}></Diamond>
      </Selector>
    )
  }
}