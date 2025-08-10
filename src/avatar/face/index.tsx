import * as React from 'react'

import Eyebrow from './eyebrow'
import Eyes from './eyes'
import Mouth from './mouth'
import Nose from './nose/Default'

export interface Props {
  uid: string
}

export default class Face extends React.Component<Props> {
  render () {
    return (
      <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
        <Mouth uid={this.props.uid} />
        <Nose uid={this.props.uid} />
        <Eyes uid={this.props.uid} />
        <Eyebrow uid={this.props.uid} />
      </g>
    )
  }
}
