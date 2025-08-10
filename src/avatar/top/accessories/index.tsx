import * as React from 'react'

import Blank from './Blank'
import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Wayfarers from './Wayfarers'
import { AccessoriesOption, Selector } from '../../../options'

export interface Props {
  uid: string
}

export default class Accessories extends React.Component<Props> {
  render () {
    return (
      <Selector defaultOption={Blank} option={AccessoriesOption}>
        <Blank uid={this.props.uid} />
        <Kurt uid={this.props.uid} />
        <Prescription01 uid={this.props.uid} />
        <Prescription02 uid={this.props.uid} />
        <Round uid={this.props.uid} />
        <Sunglasses uid={this.props.uid} />
        <Wayfarers uid={this.props.uid} />
      </Selector>
    )
  }
}
