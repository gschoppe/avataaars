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
export declare const BACKDROP_TYPES: string[];
export declare const BACKDROP_COLORS: string[];
export declare const TOP_TYPES: string[];
export declare const HAIR_COLORS: string[];
export declare const HAT_COLORS: string[];
export declare const FACIAL_HAIR_TYPES: string[];
export declare const FACIAL_HAIR_COLORS: string[];
export declare const CLOTHE_TYPES: string[];
export declare const CLOTHE_COLORS: string[];
export declare const ACCESSORIES_TYPES: string[];
export declare const GRAPHIC_TYPES: string[];
export declare const EYE_TYPES: string[];
export declare const EYEBROW_TYPES: string[];
export declare const MOUTH_TYPES: string[];
export declare const SKIN_COLORS: string[];
export declare const getColorFamily: (color: string) => string;
export declare function generateRandomAvataarProps(customOptions?: Record<string, string[]>): Record<string, string>;
export declare const HASH_ORDER: string[];
export declare const DEFAULT_AVATAR_PROPS: Record<string, string>;
export declare function getOptionList(key: string): string[];
export declare function getAvatarHash(config: Record<string, string>): string;
export declare function getAvatarConfigFromHash(hash: string): Record<string, string>;
