import * as React from 'react';
export interface Props {
    uid: string;
}
export declare const clotheColorPalette: Map<string, any>;
export declare function makeClotheColor(name: string, color: string): any;
export default class ClotheColor extends React.Component<Props> {
    render(): React.JSX.Element;
}
