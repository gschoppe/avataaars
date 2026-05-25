import * as React from 'react'
import { EyebrowOption, Selector } from '../../../options'
import { makeOptionComponent } from '../../makeOptionComponent'

const Angry = makeOptionComponent('EYEBROW', 'Angry')
const AngryNatural = makeOptionComponent('EYEBROW', 'AngryNatural')
const Default = makeOptionComponent('EYEBROW', 'Default')
const DefaultNatural = makeOptionComponent('EYEBROW', 'DefaultNatural')
const FlatNatural = makeOptionComponent('EYEBROW', 'FlatNatural')
const RaisedExcited = makeOptionComponent('EYEBROW', 'RaisedExcited')
const RaisedExcitedNatural = makeOptionComponent('EYEBROW', 'RaisedExcitedNatural')
const SadConcerned = makeOptionComponent('EYEBROW', 'SadConcerned')
const SadConcernedNatural = makeOptionComponent('EYEBROW', 'SadConcernedNatural')
const UnibrowNatural = makeOptionComponent('EYEBROW', 'UnibrowNatural')
const UpDown = makeOptionComponent('EYEBROW', 'UpDown')
const UpDownNatural = makeOptionComponent('EYEBROW', 'UpDownNatural')

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
