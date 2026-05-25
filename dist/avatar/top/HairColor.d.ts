import * as React from 'react';
export interface Props {
    uid: string;
}
export declare const hairColorPalette: Map<string, any>;
export declare function makeHairColor(name: string, color: string): any;
export default class HairColor extends React.Component<Props> {
    render(): React.JSX.Element;
}
