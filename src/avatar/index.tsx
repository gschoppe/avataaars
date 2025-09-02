import React from 'react'
import uniqueId from 'lodash.uniqueid'

import Backdrop from './backdrop'
import Accessories from './top/accessories'
import Clothe from './clothes'
import Face from './face'
import Skin from './Skin'
import Top from './top'


export interface Props {
  className?: string
  style?: React.CSSProperties
}

export interface AvatarState {
  uid: string,
  animationDelay: string
}

export default class Avatar extends React.Component<Props> {
  public state: AvatarState

  constructor(props) {
    super(props);
    this.state = {
      uid: "error",
      animationDelay: '0s'
    };
  }

  componentDidMount() {
    const uid = uniqueId('avatar-')
    const animationDelay = Math.random() * 5
    this.setState({
      uid: uid,
      animationDelay: `${animationDelay}s`
    })
  }

  render() {
    return (
      <svg data-uid={this.state.uid}
        style={this.props.style}
        className={this.props.className}
        width="264px"
        height="280px"
        viewBox="0 0 264 280"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <desc>Created with getavataaars.com</desc>
        <defs>
          <circle id={`${this.state.uid}-path-circle`} cx="120" cy="120" r="120" />
          <path
            d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z"
            id={`${this.state.uid}-path-hemicircle`}
          />
          <path
            d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z"
            id={`${this.state.uid}-path-skin`}
          />
        </defs>
        <g
          id={`${this.state.uid}-Avataaar`}
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          style={{ animationDelay: this.state.animationDelay }}>
          <g
            transform="translate(-825.000000, -1100.000000)"
            id={`${this.state.uid}-Avataaar/Backdrop`}>
            <g transform="translate(825.000000, 1100.000000)">
              <Backdrop uid={this.state.uid} />
              <g
                id={`${this.state.uid}-Person`}
                strokeWidth="1"
                fillRule="evenodd"
                mask={`url(#${this.state.uid}-mask-hemicircle)`}>
                <g id={`${this.state.uid}-Body`} transform="translate(32.000000, 36.000000)">
                  <mask id={`${this.state.uid}-Skin-Color-Mask`} fill="white">
                    <use xlinkHref={`#${this.state.uid}-path-skin`} />
                  </mask>
                  <use fill="#D0C6AC" xlinkHref={`#${this.state.uid}-path-skin`} />
                  <Skin uid={this.state.uid} />
                  <path
                    d="M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z"
                    id={`${this.state.uid}-Neck-Shadow`}
                    fillOpacity="0.100000001"
                    fill="#000000"
                    mask={`url(#${this.state.uid}-Skin-Color-Mask)`}
                  />
                </g>
                <Clothe uid={this.state.uid} />
                <Face uid={this.state.uid} />
                <Top uid={this.state.uid}>
                  <Accessories uid={this.state.uid} />
                </Top>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}
