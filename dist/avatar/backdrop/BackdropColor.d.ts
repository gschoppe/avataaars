import React from 'react';
export interface Props {
    uid: string;
    defaultColor?: string;
}
export declare function makeBackdropColor(name: string, color: string): any;
export default class BackdropColor extends React.Component<Props> {
    render(): React.JSX.Element;
}
