import * as React from 'react'
import { FacialHairOption, Selector } from '../../../options'
import { makeOptionComponent } from '../../makeOptionComponent'

const Blank: React.FC<{ uid: string }> = () => null
const anyBlank = Blank as any
anyBlank.displayName = 'Blank'
anyBlank.optionValue = 'Blank'

const BeardLight = makeOptionComponent('FACIAL_HAIR', 'BeardLight')
const BeardMajestic = makeOptionComponent('FACIAL_HAIR', 'BeardMajestic')
const BeardMedium = makeOptionComponent('FACIAL_HAIR', 'BeardMedium')
const MoustacheFancy = makeOptionComponent('FACIAL_HAIR', 'MoustacheFancy')
const MoustacheMagnum = makeOptionComponent('FACIAL_HAIR', 'MoustacheMagnum')

export interface Props {
  uid: string
}

export default class FacialHair extends React.Component<Props> {
  render () {
    return (
      <Selector option={FacialHairOption} defaultOption={anyBlank}>
        <Blank uid={this.props.uid} />
        <BeardMedium uid={this.props.uid} />
        <BeardLight uid={this.props.uid} />
        <BeardMajestic uid={this.props.uid} />
        <MoustacheFancy uid={this.props.uid} />
        <MoustacheMagnum uid={this.props.uid} />
      </Selector>
    )
  }
}

