import * as React from 'react'

export interface Props {
  uid: string
}

export default class Squint extends React.Component<Props> {
  static optionValue = 'Squint'

  render () {
    const path1 = `${this.props.uid}-Eyes-path1`
    const path2 = `${this.props.uid}-Eyes-path2`
    const mask1 = `${this.props.uid}-Eyes-mask1`
    const mask2 = `${this.props.uid}-Eyes-mask2`
    
    return (
      <g id={`${this.props.uid}-Eyes/Squint-😊`} transform='translate(0.000000, 8.000000)'>
        <defs>
          <path
            d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'
            id={path1}
          />
          <path
            d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'
            id={path2}
          />
        </defs>
        <g id={`${this.props.uid}-Eye-Left`} transform='translate(16.000000, 13.000000)'>
          <mask id={mask1} fill='white'>
            <use xlinkHref={'#' + path1} />
          </mask>
          <use id={`${this.props.uid}-Eyeball-Left`} fill='#FFFFFF' xlinkHref={'#' + path1} />
          <circle
            id={`${this.props.uid}-Pupil-Left`}
            fillOpacity='0.699999988'
            fill='#000000'
            mask={`url(#${mask1})`}
            cx='14'
            cy='10'
            r='6'
          />
        </g>
        <g id={`${this.props.uid}-Eye-Right`} transform='translate(68.000000, 13.000000)'>
          <mask id={mask2} fill='white'>
            <use xlinkHref={'#' + path2} />
          </mask>
          <use id={`${this.props.uid}-Eyeball-Right`} fill='#FFFFFF' xlinkHref={'#' + path2} />
          <circle
            id={`${this.props.uid}-Pupil-Right`}
            fillOpacity='0.699999988'
            fill='#000000'
            mask={`url(#${mask2})`}
            cx='14'
            cy='10'
            r='6'
          />
        </g>
      </g>
    )
  }
}
