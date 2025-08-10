import React from 'react'

export interface Props {
  uid: string
}

export default class NoBackdrop extends React.Component<Props> {
  static optionValue = 'NoBackdrop'

  render() {
    return null
  }
}