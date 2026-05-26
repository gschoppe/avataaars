import * as React from 'react'
import { MouthOption, Selector } from '../../../options'
import { makeOptionComponent } from '../../makeOptionComponent'

const Concerned = makeOptionComponent('MOUTH', 'Concerned')
const Default = makeOptionComponent('MOUTH', 'Default')
const Disbelief = makeOptionComponent('MOUTH', 'Disbelief')
const Eating = makeOptionComponent('MOUTH', 'Eating')
const Grimace = makeOptionComponent('MOUTH', 'Grimace')
const Sad = makeOptionComponent('MOUTH', 'Sad')
const ScreamOpen = makeOptionComponent('MOUTH', 'ScreamOpen')
const Serious = makeOptionComponent('MOUTH', 'Serious')
const Smile = makeOptionComponent('MOUTH', 'Smile')
const Tongue = makeOptionComponent('MOUTH', 'Tongue')
const Twinkle = makeOptionComponent('MOUTH', 'Twinkle')
const Vomit = makeOptionComponent('MOUTH', 'Vomit')

export interface Props {
  uid: string
}

export default class Mouth extends React.Component<Props> {
  render () {
    return (
      <Selector defaultOption={Default} option={MouthOption}>
        <Concerned uid={this.props.uid} />
        <Default uid={this.props.uid} />
        <Disbelief uid={this.props.uid} />
        <Eating uid={this.props.uid} />
        <Grimace uid={this.props.uid} />
        <Sad uid={this.props.uid} />
        <ScreamOpen uid={this.props.uid} />
        <Serious uid={this.props.uid} />
        <Smile uid={this.props.uid} />
        <Tongue uid={this.props.uid} />
        <Twinkle uid={this.props.uid} />
        <Vomit uid={this.props.uid} />
      </Selector>
    )
  }
}
