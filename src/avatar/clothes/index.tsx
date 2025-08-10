import * as React from 'react'

import BlazerShirt from './BlazerShirt'
import BlazerSweater from './BlazerSweater'
import CollarSweater from './CollarSweater'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'
import Overall from './Overall'
import ShirtCrewNeck from './ShirtCrewNeck'
import ShirtScoopNeck from './ShirtScoopNeck'
import ShirtVNeck from './ShirtVNeck'
import { ClotheOption, Selector } from '../../options'

export interface Props {
  uid: string
}

export default class Clothes extends React.Component<Props> {
  render () {
    return (
      <Selector option={ClotheOption} defaultOption={BlazerShirt}>
        <BlazerShirt uid={this.props.uid} />
        <BlazerSweater uid={this.props.uid} />
        <CollarSweater uid={this.props.uid} />
        <GraphicShirt uid={this.props.uid} />
        <Hoodie uid={this.props.uid} />
        <Overall uid={this.props.uid} />
        <ShirtCrewNeck uid={this.props.uid} />
        <ShirtScoopNeck uid={this.props.uid} />
        <ShirtVNeck uid={this.props.uid} />
      </Selector>
    )
  }
}
