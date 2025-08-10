import * as React from 'react';
export interface Props {
    pieceSize?: string;
    pieceType?: string;
    style?: React.CSSProperties;
    viewBox?: string;
}
export interface AvatarState {
    uid: string;
}
export default class PieceComponent extends React.Component<Props> {
    state: AvatarState;
    constructor(props: any);
    componentDidMount(): void;
    render(): React.JSX.Element;
}
