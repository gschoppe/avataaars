import * as React from 'react'

import Concerned from './Concerned'
import Default from './Default'
import Disbelief from './Disbelief'
import Eating from './Eating'
import Grimace from './Grimace'
import Sad from './Sad'
import ScreamOpen from './ScreamOpen'
import Serious from './Serious'
import Smile from './Smile'
import Tongue from './Tongue'
import Twinkle from './Twinkle'
import Vomit from './Vomit'
import { MouthOption, Selector } from '../../../options'

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
