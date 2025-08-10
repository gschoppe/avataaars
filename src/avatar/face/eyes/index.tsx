import * as React from 'react'

import Close from './Close'
import Cry from './Cry'
import Default from './Default'
import Dizzy from './Dizzy'
import EyeRoll from './EyeRoll'
import Happy from './Happy'
import Hearts from './Hearts'
import Side from './Side'
import Squint from './Squint'
import Surprised from './Surprised'
import Wink from './Wink'
import WinkWacky from './WinkWacky'
import { EyesOption, Selector } from '../../../options'

export interface Props {
  uid: string
}

export default class Eyes extends React.Component<Props> {
  render () {
    return (
      <Selector defaultOption={Default} option={EyesOption}>
        <Close uid={this.props.uid} />
        <Cry uid={this.props.uid} />
        <Default uid={this.props.uid} />
        <Dizzy uid={this.props.uid} />
        <EyeRoll uid={this.props.uid} />
        <Happy uid={this.props.uid} />
        <Hearts uid={this.props.uid} />
        <Side uid={this.props.uid} />
        <Squint uid={this.props.uid} />
        <Surprised uid={this.props.uid} />
        <Wink uid={this.props.uid} />
        <WinkWacky uid={this.props.uid} />
      </Selector>
    )
  }
}
