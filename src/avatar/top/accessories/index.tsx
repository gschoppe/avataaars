import * as React from 'react'
import { AccessoriesOption, Selector } from '../../../options'
import { makeOptionComponent } from '../../makeOptionComponent'

const Blank: React.FC<{ uid: string }> = () => null
const anyBlank = Blank as any
anyBlank.displayName = 'Blank'
anyBlank.optionValue = 'Blank'

const Kurt = makeOptionComponent('ACCESSORIES', 'Kurt')
const Prescription01 = makeOptionComponent('ACCESSORIES', 'Prescription01')
const Prescription02 = makeOptionComponent('ACCESSORIES', 'Prescription02')
const Round = makeOptionComponent('ACCESSORIES', 'Round')
const Sunglasses = makeOptionComponent('ACCESSORIES', 'Sunglasses')
const Wayfarers = makeOptionComponent('ACCESSORIES', 'Wayfarers')

export interface Props {
  uid: string
}

export default class Accessories extends React.Component<Props> {
  render () {
    return (
      <Selector defaultOption={anyBlank} option={AccessoriesOption}>
        <Blank uid={this.props.uid} />
        <Kurt uid={this.props.uid} />
        <Prescription01 uid={this.props.uid} />
        <Prescription02 uid={this.props.uid} />
        <Round uid={this.props.uid} />
        <Sunglasses uid={this.props.uid} />
        <Wayfarers uid={this.props.uid} />
      </Selector>
    )
  }
}

