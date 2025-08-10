import * as React from 'react'
import uniqueId from 'lodash.uniqueid'

import Clothe from './clothes'
import Graphics from './clothes/Graphics'
import Accessories from './top/accessories'
import FacialHair from './top/facialHair'
import Top from './top'

import Eyes from './face/eyes'
import Eyebrows from './face/eyebrow'
import Mouth from './face/mouth'
import Nose from './face/nose'
import Skin from './Skin'

export interface Props {
  pieceSize?: string
  pieceType?: string
  style?: React.CSSProperties
  viewBox?: string
}

export interface AvatarState {
  uid: string
}

export default class PieceComponent extends React.Component<Props> {
  public state: AvatarState

  constructor(props) {
    super(props);
    this.state = {
      uid: "error",
    };
  }

  componentDidMount() {
    const uid = uniqueId('avatar-')
    this.setState({ uid: uid })
  }

  render() {
    return (
      <svg
        style={this.props.style}
        width={`${this.props.pieceSize}px`}
        height={`${this.props.pieceSize}px`}
        viewBox={this.props.viewBox || "0 0 264 280"}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        {this.props.pieceType === 'top' && <Top uid={this.state.uid} />}
        {this.props.pieceType === 'clothe' && <Clothe uid={this.state.uid} />}
        {this.props.pieceType === 'graphics' && <Graphics uid={this.state.uid} />}
        {(this.props.pieceType === 'accessories' ||
          this.props.pieceType === 'accesories') && <Accessories uid={this.state.uid} />}
        {this.props.pieceType === 'facialHair' && <FacialHair uid={this.state.uid} />}
        {this.props.pieceType === 'eyes' && <Eyes uid={this.state.uid} />}
        {this.props.pieceType === 'eyebrows' && <Eyebrows uid={this.state.uid} />}
        {this.props.pieceType === 'mouth' && <Mouth uid={this.state.uid} />}
        {this.props.pieceType === 'nose' && <Nose uid={this.state.uid} />}
        {this.props.pieceType === 'skin' && <Skin uid={this.state.uid} />}
      </svg>
    )
  }
}
