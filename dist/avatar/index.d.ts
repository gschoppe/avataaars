import React from 'react';
export interface Props {
    className?: string;
    style?: React.CSSProperties;
}
export interface AvatarState {
    uid: string;
    animationDelay: string;
}
export default class Avatar extends React.Component<Props> {
    state: AvatarState;
    constructor(props: any);
    componentDidMount(): void;
    render(): React.JSX.Element;
}
