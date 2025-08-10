import * as React from 'react'

export interface Props {
  uid: string
}

export default class Blank extends React.Component<Props> {
  static optionValue = 'Blank'

  render () {
    return null
  }
}
