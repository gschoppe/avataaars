import * as React from 'react';
import { useMemo } from 'react';
import Avatar from './avatar';
import { OptionContext, OptionsContext, allOptions } from './options';
import { makeBackdropColor } from './avatar/backdrop/BackdropColor';
import { makeSkinColor } from './avatar/Skin';
import { makeHairColor } from './avatar/top/HairColor';
import { makeFacialHairColor } from './avatar/top/facialHair/FacialHairColor';
import { makeClotheColor } from './avatar/clothes/ClotheColor';
import { makeHatColor } from './avatar/top/HatColor';
export { default as Avatar } from './avatar';
export { Option, OptionContext, OptionsContext, allOptions } from './options';
import { default as PieceComponent } from './avatar/piece';
export const PALETTES = {
    BACKDROP: "BACKDROP",
    SKIN: "SKIN",
    HAIR: "HAIR",
    FACIAL_HAIR: "FACIAL_HAIR",
    CLOTHES: "CLOTHES",
    HAT: "HAT"
};
export function addPaletteColor(palette, name, color) {
    switch (palette) {
        case PALETTES.BACKDROP:
            return makeBackdropColor(name, color);
        case PALETTES.SKIN:
            return makeSkinColor(name, color);
        case PALETTES.HAIR:
            return makeHairColor(name, color);
        case PALETTES.FACIAL_HAIR:
            return makeFacialHairColor(name, color);
        case PALETTES.CLOTHES:
            return makeClotheColor(name, color);
        case PALETTES.HAT:
            return makeHatColor(name, color);
        default:
            throw new Error(`Unknown palette: ${palette}`);
    }
}
export const AvatarComponent = (props) => {
    const { style, className } = props;
    const optionContext = useMemo(() => new OptionContext(allOptions), []);
    const data = {};
    for (const option of allOptions) {
        const value = props[option.key];
        if (value) {
            data[option.key] = value;
        }
    }
    optionContext.setData(data);
    return (React.createElement(OptionsContext.Provider, { value: optionContext },
        React.createElement(Avatar, { style: style, className: className })));
};
export default AvatarComponent;
export const Piece = (props) => {
    const { style, pieceType, pieceSize, viewBox } = props;
    const optionContext = useMemo(() => new OptionContext(allOptions), []);
    const data = {};
    for (const option of allOptions) {
        const value = props[option.key];
        if (value) {
            data[option.key] = value;
        }
    }
    optionContext.setData(data);
    return (React.createElement(OptionsContext.Provider, { value: optionContext },
        React.createElement(PieceComponent, { style: style, pieceType: pieceType, pieceSize: pieceSize, viewBox: viewBox })));
};
import { backdropColorPalette } from './avatar/backdrop/BackdropColor';
import { skinColorPalette } from './avatar/Skin';
import { hairColorPalette } from './avatar/top/HairColor';
import { facialHairColorPalette } from './avatar/top/facialHair/FacialHairColor';
import { clotheColorPalette } from './avatar/clothes/ClotheColor';
import { hatColorPalette } from './avatar/top/HatColor';
export function removePaletteColor(palette, name) {
    switch (palette) {
        case PALETTES.BACKDROP:
            backdropColorPalette.delete(name);
            break;
        case PALETTES.SKIN:
            skinColorPalette.delete(name);
            break;
        case PALETTES.HAIR:
            hairColorPalette.delete(name);
            break;
        case PALETTES.FACIAL_HAIR:
            facialHairColorPalette.delete(name);
            break;
        case PALETTES.CLOTHES:
            clotheColorPalette.delete(name);
            break;
        case PALETTES.HAT:
            hatColorPalette.delete(name);
            break;
        default:
            throw new Error(`Unknown palette: ${palette}`);
    }
}
