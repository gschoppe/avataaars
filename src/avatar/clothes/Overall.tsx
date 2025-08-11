import * as React from 'react'
import ClotheColor from './ClotheColor'

export interface Props {
  uid: string
}

export default class Overall extends React.Component<Props> {
  static optionValue = 'Overall'

  render() {
    const path1 = `${this.props.uid}-Clothing-path1`
    const clothingColorMask = `${this.props.uid}-Clothing-Color-Mask`

    return (
      <g id={`${this.props.uid}-Clothing/Overall`} transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z'
            id={path1}
          />
        </defs>
        <mask id={clothingColorMask} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <use
          id={`${this.props.uid}-Overall`}
          fill='#B7C1DB'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <ClotheColor uid={this.props.uid} />
        <circle
          id={`${this.props.uid}-ButtonLeft`}
          fill='#F4F4F4'
          fillRule='evenodd'
          cx='81'
          cy='83'
          r='5'
        />
        <circle
          id={`${this.props.uid}-ButtonRight`}
          fill='#F4F4F4'
          fillRule='evenodd'
          cx='183'
          cy='83'
          r='5'
        />
      </g>
    )
  }
}
