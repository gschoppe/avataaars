import * as React from 'react';
export interface Props {
    uid: string;
    defaultColor?: string;
}
export declare function makeHatColor(name: string, color: string): any;
export default class Colors extends React.Component<Props> {
    render(): React.JSX.Element;
}
