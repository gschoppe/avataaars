import * as React from 'react'

export interface Props {
  uid: string
}

export default class Default extends React.Component<Props> {
  static optionValue = 'Default'

  render () {
    return (
      <g
        id={`${this.props.uid}-Nose/Default`}
        transform='translate(28.000000, 40.000000)'
        fillOpacity='0.16'>
        <path
          d='M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8'
          id={`${this.props.uid}-Nose`}
        />
      </g>
    )
  }
}
