import * as React from 'react'

export interface Props {
  uid: string
}

export default class Smile extends React.Component<Props> {
  static optionValue = 'Smile'

  render () {
    const path1 = `${this.props.uid}-Mouth-path1`
    const mask1 = `${this.props.uid}-Mouth-mask1`
    
    return (
      <g id={`${this.props.uid}-Mouth/Smile`} transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'
            id={path1}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <use
          id={`${this.props.uid}-Mouth`}
          fillOpacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <rect
          id={`${this.props.uid}-Teeth`}
          fill='#FFFFFF'
          fillRule='evenodd'
          mask={`url(#${mask1})`}
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <g
          id={`${this.props.uid}-Tongue`}
          strokeWidth='1'
          fillRule='evenodd'
          mask={`url(#${mask1})`}
          fill='#FF4F6D'>
          <g transform='translate(38.000000, 24.000000)'>
            <circle cx='11' cy='11' r='11' />
            <circle cx='21' cy='11' r='11' />
          </g>
        </g>
      </g>
    )
  }
}
