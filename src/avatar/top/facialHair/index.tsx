import * as React from 'react'

import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { FacialHairOption, Selector } from '../../../options'

export interface Props {
  uid: string
}

export default class FacialHair extends React.Component<Props> {
  render () {
    return (
      <Selector option={FacialHairOption} defaultOption={Blank}>
        <Blank uid={this.props.uid} />
        <BeardMedium uid={this.props.uid} />
        <BeardLight uid={this.props.uid} />
        <BeardMajestic uid={this.props.uid} />
        <MoustacheFancy uid={this.props.uid} />
        <MoustacheMagnum uid={this.props.uid} />
      </Selector>
    )
  }
}
