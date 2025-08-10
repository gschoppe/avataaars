import * as React from 'react'

export interface Props {
  uid: string
}

export default class Surprised extends React.Component<Props> {
  static optionValue = 'Surprised'

  render () {
    return (
      <g
        id={`${this.props.uid}-Eyes/Surprised-😳`}
        transform='translate(0.000000, 8.000000)'
      >
        <g id={`${this.props.uid}-Eye-Left`}>
          <circle
            id={`${this.props.uid}-Eyeball-Left`}
            cx='30' cy='22' r='14'
            fill='#FFFFFF'
          />
          <circle
            id={`${this.props.uid}-Pupil-Left`}
            fillOpacity='0.699999988'
            cx='30' cy='22' r='6'
            fill='#000000'
          />
        </g>
        <g id={`${this.props.uid}-Eye-Right`}>
          <circle
            id={`${this.props.uid}-Eyeball-Right`}
            cx='82' cy='22' r='14'
            fill='#FFFFFF'
          />
          <circle
            id={`${this.props.uid}-Pupil-Right`}
            fillOpacity='0.699999988'
            cx='82' cy='22' r='6'
            fill='#000000'
          />
        </g>
      </g>
    )
  }
}
