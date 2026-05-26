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
export declare function addPaletteColor(palette: string, name: string, color?: string | GradientConfig): any;
export interface Props {
    [key: string]: any;
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
export declare const AvatarComponent: React.FC<Props>;
export default AvatarComponent;
export declare const Piece: React.FC<Props>;
export declare function removePaletteColor(palette: string, name: string): void;
export interface GradientStop {
    offset: string;
    color: string;
    opacity?: number | string;
}
export interface GradientConfig {
    type: 'linear' | 'radial';
    attrs?: Record<string, any>;
    stops: GradientStop[];
}
export declare const registeredGradients: Map<string, GradientConfig>;
export declare function registerGradient(name: string, config: GradientConfig): void;
