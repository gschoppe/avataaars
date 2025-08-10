import React from 'react'

import BackdropColor from './BackdropColor'

export interface Props {
  uid: string
}

export default class CircleBackdrop extends React.Component<Props> {
  static optionValue = 'Circle'

  render() {
    return (
      <>
        <g
          id={`${this.props.uid}-Circle`}
          strokeWidth="1"
          fillRule="evenodd"
          transform="translate(12.000000, 40.000000)">
          <mask id={`${this.props.uid}-Backdrop-Color-Mask`} fill="white">
            <use xlinkHref={`#${this.props.uid}-path-circle`} />
          </mask>
          <use
            id={`${this.props.uid}-Circle-Background`}
            fill="#E6E6E6"
            xlinkHref={`#${this.props.uid}-path-circle`}
          />
          <BackdropColor uid={this.props.uid} defaultColor="Blue01" />
        </g>
        <mask id={`${this.props.uid}-mask-hemicircle`} fill="white">
          <use xlinkHref={`#${this.props.uid}-path-hemicircle`} />
        </mask>
      </>
    )
  }
}