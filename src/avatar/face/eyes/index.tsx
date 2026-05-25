import * as React from 'react'
import { EyesOption, Selector } from '../../../options'
import { makeOptionComponent } from '../../makeOptionComponent'

const Close = makeOptionComponent('EYES', 'Close')
const Cry = makeOptionComponent('EYES', 'Cry')
const Default = makeOptionComponent('EYES', 'Default')
const Dizzy = makeOptionComponent('EYES', 'Dizzy')
const EyeRoll = makeOptionComponent('EYES', 'EyeRoll')
const Happy = makeOptionComponent('EYES', 'Happy')
const Hearts = makeOptionComponent('EYES', 'Hearts')
const Side = makeOptionComponent('EYES', 'Side')
const Squint = makeOptionComponent('EYES', 'Squint')
const Surprised = makeOptionComponent('EYES', 'Surprised')
const Wink = makeOptionComponent('EYES', 'Wink')
const WinkWacky = makeOptionComponent('EYES', 'WinkWacky')

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
