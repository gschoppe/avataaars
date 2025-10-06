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
            <circle cx="120" cy="120" r="120" />
          </mask>
          <circle cx="120" cy="120" r="120" fill="#E6E6E6" />
          <BackdropColor uid={this.props.uid} defaultColor="Blue01" />
        </g>
        <mask id={`${this.props.uid}-Backdrop-Mask`} fill="white">
          <path d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z" />
        </mask>
      </>
    )
  }
}