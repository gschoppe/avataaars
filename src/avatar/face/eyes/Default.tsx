import * as React from 'react'

export interface Props {
  uid: string
}

export default class Default extends React.Component<Props> {
  static optionValue = 'Default'

  render () {
    return (
      <g
        id={`${this.props.uid}-Eyes/Default-😀`}
        transform='translate(0.000000, 8.000000)'
        fillOpacity='0.599999964'
      >
        <circle id={`${this.props.uid}-Eye-Left`} cx='30' cy='22' r='6' />
        <circle id={`${this.props.uid}-Eye-Right`} cx='82' cy='22' r='6' />
      </g>
    )
  }
}
