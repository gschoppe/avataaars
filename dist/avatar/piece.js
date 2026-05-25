import * as React from 'react';
import { useState, useEffect } from 'react';
import uniqueId from '../uniqueId';
import Clothe from './clothes';
import Graphics from './clothes/Graphics';
import Accessories from './top/accessories';
import FacialHair from './top/facialHair';
import Top from './top';
import Eyes from './face/eyes';
import Eyebrows from './face/eyebrow';
import Mouth from './face/mouth';
import Nose from './face/nose';
import Skin from './Skin';
export const PieceComponent = (props) => {
    const { pieceSize, pieceType, style, viewBox } = props;
    const [uid, setUid] = useState('error');
    useEffect(() => {
        setUid(uniqueId('avatar-'));
    }, []);
    return (React.createElement("svg", { style: style, width: `${pieceSize}px`, height: `${pieceSize}px`, viewBox: viewBox || "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        pieceType === 'top' && React.createElement(Top, { uid: uid }),
        pieceType === 'clothe' && React.createElement(Clothe, { uid: uid }),
        pieceType === 'graphics' && React.createElement(Graphics, { uid: uid }),
        (pieceType === 'accessories' ||
            pieceType === 'accesories') && React.createElement(Accessories, { uid: uid }),
        pieceType === 'facialHair' && React.createElement(FacialHair, { uid: uid }),
        pieceType === 'eyes' && React.createElement(Eyes, { uid: uid }),
        pieceType === 'eyebrows' && React.createElement(Eyebrows, { uid: uid }),
        pieceType === 'mouth' && React.createElement(Mouth, { uid: uid }),
        pieceType === 'nose' && React.createElement(Nose, { uid: uid }),
        pieceType === 'skin' && React.createElement(Skin, { uid: uid })));
};
export default PieceComponent;
