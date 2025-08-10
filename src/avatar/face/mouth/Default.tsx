import * as React from 'react'

export interface Props {
  uid: string
}

export default class Default extends React.Component<Props> {
  static optionValue = 'Default'

  render () {
    return (
      <g
        id={`${this.props.uid}-Mouth/Default`}
        transform='translate(2.000000, 52.000000)'
        fillOpacity='0.699999988'>
        <path
          d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15'
          id={`${this.props.uid}-Mouth`}
        />
      </g>
    )
  }
}
