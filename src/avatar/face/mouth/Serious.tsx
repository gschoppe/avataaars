import * as React from 'react'

export interface Props {
  uid: string
}

export default class Serious extends React.Component<Props> {
  static optionValue = 'Serious'

  render () {
    return (
      <g
        id={`${this.props.uid}-Mouth/Serious`}
        transform='translate(2.000000, 52.000000)'
        fill='#000000'
        fillOpacity='0.699999988'>
        <rect id={`${this.props.uid}-Mouth`} x='42' y='18' width='24' height='6' rx='3' />
      </g>
    )
  }
}
