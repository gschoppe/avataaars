import React from 'react'

import CircleBackdrop from './CircleBackdrop'
import NoBackdrop from './NoBackdrop'
import { Selector, BackdropOption } from '../../options'

export interface Props {
  uid: string
}

export default class Backdrop extends React.Component<Props> {
  render() {
    return (
      <Selector defaultOption={CircleBackdrop} option={BackdropOption}>
        <NoBackdrop uid={this.props.uid}></NoBackdrop>
        <CircleBackdrop uid={this.props.uid}></CircleBackdrop>
      </Selector>
    )
  }
}