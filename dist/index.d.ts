import * as React from 'react';
export { default as Avatar } from './avatar';
export { Option, OptionContext, OptionsContext, allOptions } from './options';
export declare const PALETTES: {
    BACKDROP: string;
    SKIN: string;
    HAIR: string;
    FACIAL_HAIR: string;
    CLOTHES: string;
    HAT: string;
};
export declare function addPaletteColor(palette: string, name: string, color: string): any;
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    backdropType?: string;
    backdropColor?: string;
    topType?: string;
    accessoriesType?: string;
    hairColor?: string;
    hatColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
    viewBox?: string;
    uid?: string;
}
export default class AvatarComponent extends React.Component<Props> {
    private optionContext;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    render(): React.JSX.Element;
    private updateOptionContext;
}
export declare class Piece extends React.Component<Props> {
    private optionContext;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    render(): React.JSX.Element;
    private updateOptionContext;
}
