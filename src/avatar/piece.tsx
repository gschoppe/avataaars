import * as React from 'react'
import { useState, useEffect } from 'react'
import uniqueId from '../uniqueId'

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

export const PieceComponent: React.FC<Props> = (props) => {
  const { pieceSize, pieceType, style, viewBox } = props
  const [uid, setUid] = useState('error')

  useEffect(() => {
    setUid(uniqueId('avatar-'))
  }, [])

  return (
    <svg
      style={style}
      width={`${pieceSize}px`}
      height={`${pieceSize}px`}
      viewBox={viewBox || "0 0 264 280"}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      {pieceType === 'top' && <Top uid={uid} />}
      {pieceType === 'clothe' && <Clothe uid={uid} />}
      {pieceType === 'graphics' && <Graphics uid={uid} />}
      {(pieceType === 'accessories' ||
        pieceType === 'accesories') && <Accessories uid={uid} />}
      {pieceType === 'facialHair' && <FacialHair uid={uid} />}
      {pieceType === 'eyes' && <Eyes uid={uid} />}
      {pieceType === 'eyebrows' && <Eyebrows uid={uid} />}
      {pieceType === 'mouth' && <Mouth uid={uid} />}
      {pieceType === 'nose' && <Nose uid={uid} />}
      {pieceType === 'skin' && <Skin uid={uid} />}
    </svg>
  )
}

export default PieceComponent
