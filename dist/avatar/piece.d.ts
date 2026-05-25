import * as React from 'react';
export interface Props {
    pieceSize?: string;
    pieceType?: string;
    style?: React.CSSProperties;
    viewBox?: string;
}
export declare const PieceComponent: React.FC<Props>;
export default PieceComponent;
