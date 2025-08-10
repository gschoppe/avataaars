import * as React from 'react'

export interface Props {
  uid: string
}

export default class EyeRoll extends React.Component<Props> {
  static optionValue = 'EyeRoll'

  render () {
    return (
      <g id={`${this.props.uid}-Eyes/Eye-Roll-🙄`} transform='translate(0.000000, 8.000000)'>
        <g id={`${this.props.uid}-Eye-Left`}>
          <circle id={`${this.props.uid}-Eyeball-Left`}
            fill='#FFFFFF'
            cx='30'
            cy='22'
            r='14'
          />
          <circle
            id={`${this.props.uid}-Pupil-Left`}
            fillOpacity='0.699999988'
            fill='#000000'
            cx='30'
            cy='14'
            r='6'
          />
        </g>
        <g id={`${this.props.uid}-Eye-Right`}>
          <circle
            id={`${this.props.uid}-Eyeball-Right`}
            fill='#FFFFFF'
            cx='82'
            cy='22'
            r='14'
          />
          <circle
            id={`${this.props.uid}-Pupil-Right`}
            fillOpacity='0.699999988'
            fill='#000000'
            cx='82'
            cy='14'
            r='6'
          />
        </g>
      </g>
    )
  }
}
