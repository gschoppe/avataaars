import * as React from 'react'
import { ClotheOption, Selector } from '../../options'
import { makeOptionComponent } from '../makeOptionComponent'

const BlazerShirt = makeOptionComponent('CLOTHES', 'BlazerShirt')
const BlazerSweater = makeOptionComponent('CLOTHES', 'BlazerSweater')
const CollarSweater = makeOptionComponent('CLOTHES', 'CollarSweater')
const GraphicShirt = makeOptionComponent('CLOTHES', 'GraphicShirt')
const Hoodie = makeOptionComponent('CLOTHES', 'Hoodie')
const Overall = makeOptionComponent('CLOTHES', 'Overall')
const ShirtCrewNeck = makeOptionComponent('CLOTHES', 'ShirtCrewNeck')
const ShirtScoopNeck = makeOptionComponent('CLOTHES', 'ShirtScoopNeck')
const ShirtVNeck = makeOptionComponent('CLOTHES', 'ShirtVNeck')

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
