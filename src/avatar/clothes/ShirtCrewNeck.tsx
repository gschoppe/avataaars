import * as React from 'react'
import ClotheColor from './ClotheColor'

export interface Props {
  uid: string
}

export default class ShirtCrewNeck extends React.Component<Props> {
  static optionValue = 'ShirtCrewNeck'

  render() {
    const path1 = `${this.props.uid}-Clothing-path1`
    const clothingColorMask = `${this.props.uid}-Clothing-Color-Mask`

    return (
      <g
        id={`${this.props.uid}-Clothing/Shirt-Crew-Neck`}
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z'
            id={path1}
          />
        </defs>
        <mask id={clothingColorMask} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>
        <use
          id={`${this.props.uid}-Clothes`}
          fill='#E6E6E6'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />
        <ClotheColor uid={this.props.uid} />
        <g
          id={`${this.props.uid}-Shadowy`}
          opacity='0.599999964'
          strokeWidth='1'
          fillRule='evenodd'
          mask={`url(#${clothingColorMask})`}
          fillOpacity='0.16'
          fill='#000000'>
          <g transform='translate(92.000000, 4.000000)' id={`${this.props.uid}-Hola-👋🏼`}>
            <ellipse
              cx='40.5'
              cy='27.8476251'
              rx='39.6351047'
              ry='26.9138272'
            />
          </g>
        </g>
      </g>
    )
  }
}
