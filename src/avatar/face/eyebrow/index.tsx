import * as React from 'react'

import Angry from './Angry'
import AngryNatural from './AngryNatural'
import Default from './Default'
import DefaultNatural from './DefaultNatural'
import FlatNatural from './FlatNatural'
import RaisedExcited from './RaisedExcited'
import RaisedExcitedNatural from './RaisedExcitedNatural'
import SadConcerned from './SadConcerned'
import SadConcernedNatural from './SadConcernedNatural'
import UnibrowNatural from './UnibrowNatural'
import UpDown from './UpDown'
import UpDownNatural from './UpDownNatural'
import { EyebrowOption, Selector } from '../../../options'

export interface Props {
  uid: string
}

export default class Eyebrow extends React.Component<Props> {
  render () {
    return (
      <Selector defaultOption={Default} option={EyebrowOption}>
        <Angry uid={this.props.uid} />
        <AngryNatural uid={this.props.uid} />
        <Default uid={this.props.uid} />
        <DefaultNatural uid={this.props.uid} />
        <FlatNatural uid={this.props.uid} />
        <RaisedExcited uid={this.props.uid} />
        <RaisedExcitedNatural uid={this.props.uid} />
        <SadConcerned uid={this.props.uid} />
        <SadConcernedNatural uid={this.props.uid} />
        <UnibrowNatural uid={this.props.uid} />
        <UpDown uid={this.props.uid} />
        <UpDownNatural uid={this.props.uid} />
      </Selector>
    )
  }
}
