import * as React from 'react'

import BackdropColor from './BackdropColor'

export interface Props {
  uid: string
}

export default class DiamondBackdrop extends React.Component<Props> {
  static optionValue = 'Diamond'

  render() {
    return (
      <>
        <g
          id={`${this.props.uid}-Diamond`}
          strokeWidth="1"
          fillRule="evenodd">
          <mask id={`${this.props.uid}-Backdrop-Color-Mask`} fill="white">
            <path d="M12,160 L132,40 L252,160 L132,280 Z" />
          </mask>
          <path d="M12,160 L132,40 L252,160 L132,280 Z" fill="#E6E6E6" />
          <BackdropColor uid={this.props.uid} defaultColor="Blue01" />
        </g>
        <mask id={`${this.props.uid}-Backdrop-Mask`} fill="white">
          <path d="M-100,-100 V160, H12 L132,280 L252,160 H364 V-100 H-100 Z" />
        </mask>
      </>
    )
  }
}