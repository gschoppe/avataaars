import * as React from 'react';
export interface Props {
    uid: string;
}
export declare const facialHairColorPalette: Map<string, any>;
export declare function makeFacialHairColor(name: string, color: string): any;
export default class FacialHairColor extends React.Component<Props> {
    render(): React.JSX.Element;
}
