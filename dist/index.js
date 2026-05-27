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
    let resolvedColor;
    if (color === undefined) {
        if (registeredGradients.has(name)) {
            resolvedColor = `url(#{uid}-gradient-${name})`;
        }
        else {
            throw new Error(`Color parameter is required unless '${name}' is a registered gradient.`);
        }
    }
    else if (typeof color === 'object' && color !== null) {
        registerGradient(name, color);
        resolvedColor = `url(#{uid}-gradient-${name})`;
    }
    else {
        if (typeof color === 'string' && color.startsWith('url(#') && !color.includes('{uid}')) {
            const gradName = color.slice(5, -1);
            if (registeredGradients.has(gradName)) {
                resolvedColor = `url(#{uid}-gradient-${gradName})`;
            }
            else {
                resolvedColor = color;
            }
        }
        else {
            resolvedColor = color;
        }
    }
    switch (palette) {
        case PALETTES.BACKDROP:
            return makeBackdropColor(name, resolvedColor);
        case PALETTES.SKIN:
            return makeSkinColor(name, resolvedColor);
        case PALETTES.HAIR:
            return makeHairColor(name, resolvedColor);
        case PALETTES.FACIAL_HAIR:
            return makeFacialHairColor(name, resolvedColor);
        case PALETTES.CLOTHES:
            return makeClotheColor(name, resolvedColor);
        case PALETTES.HAT:
            return makeHatColor(name, resolvedColor);
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
    }
}
export const registeredGradients = new Map();
export function registerGradient(name, config) {
    registeredGradients.set(name, config);
}
/* Static Avataaars Option Lists */
export const BACKDROP_TYPES = ['Circle', 'Diamond', 'NoBackdrop'];
export const BACKDROP_COLORS = [
    'Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather',
    'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow',
    'Pink', 'Red', 'White'
];
export const TOP_TYPES = [
    'NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban',
    'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4',
    'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy',
    'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand',
    'LongHairMiaWallace', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairStraight',
    'LongHairStraight2', 'LongHairStraightStrand',
    'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggy',
    'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound',
    'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart'
];
export const HAIR_COLORS = [
    'Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark',
    'PastelPink', 'Blue', 'Platinum', 'Red', 'SilverGray'
];
export const HAT_COLORS = [...BACKDROP_COLORS];
export const FACIAL_HAIR_TYPES = [
    'Blank', 'BeardLight', 'BeardMajestic', 'BeardMedium',
    'MoustacheFancy', 'MoustacheMagnum'
];
export const FACIAL_HAIR_COLORS = [...HAIR_COLORS];
export const CLOTHE_TYPES = [
    'BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt',
    'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'
];
export const CLOTHE_COLORS = [
    'Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather',
    'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow',
    'Pink', 'Red', 'White'
];
export const ACCESSORIES_TYPES = [
    'Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round',
    'Sunglasses', 'Wayfarers'
];
export const GRAPHIC_TYPES = [
    'Bat', 'Cumbia', 'Deer', 'Diamond', 'Hola', 'Pizza',
    'Resist', 'Selena', 'Skull', 'SkullOutline'
];
export const EYE_TYPES = [
    'Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy',
    'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'
];
export const EYEBROW_TYPES = [
    'Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural',
    'FrownNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned',
    'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural'
];
export const MOUTH_TYPES = [
    'Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad',
    'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'
];
export const SKIN_COLORS = [
    'Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'
];
export const getColorFamily = (color) => {
    const c = color.toLowerCase();
    if (c.includes('red') || c.includes('auburn'))
        return 'red';
    if (c.includes('blue'))
        return 'blue';
    if (c.includes('green'))
        return 'green';
    if (c.includes('yellow') || c.includes('blonde') || c.includes('platinum'))
        return 'yellow';
    if (c.includes('pink'))
        return 'pink';
    if (c.includes('gray') || c.includes('grey') || c.includes('heather') || c.includes('silver'))
        return 'gray';
    if (c.includes('black'))
        return 'black';
    if (c.includes('white'))
        return 'white';
    if (c.includes('orange'))
        return 'orange';
    if (c.includes('brown'))
        return 'brown';
    return c;
};
export function generateRandomAvataarProps(customOptions) {
    const newProps = {};
    const getOptions = (key, staticList) => {
        return (customOptions && customOptions[key]) || staticList;
    };
    const backdropTypes = getOptions('backdropType', BACKDROP_TYPES);
    const backdropColors = getOptions('backdropColor', BACKDROP_COLORS);
    const topTypes = getOptions('topType', TOP_TYPES);
    const hairColors = getOptions('hairColor', HAIR_COLORS);
    const hatColors = getOptions('hatColor', HAT_COLORS);
    const facialHairTypes = getOptions('facialHairType', FACIAL_HAIR_TYPES);
    const facialHairColors = getOptions('facialHairColor', FACIAL_HAIR_COLORS);
    const clotheTypes = getOptions('clotheType', CLOTHE_TYPES);
    const clotheColors = getOptions('clotheColor', CLOTHE_COLORS);
    const accessoriesTypes = getOptions('accessoriesType', ACCESSORIES_TYPES);
    const graphicTypes = getOptions('graphicType', GRAPHIC_TYPES);
    const eyeTypes = getOptions('eyeType', EYE_TYPES);
    const eyebrowTypes = getOptions('eyebrowType', EYEBROW_TYPES);
    const mouthTypes = getOptions('mouthType', MOUTH_TYPES);
    const skinColors = getOptions('skinColor', SKIN_COLORS);
    // 1. Randomize Backdrop Type
    if (backdropTypes.length > 0) {
        newProps.backdropType = backdropTypes[Math.floor(Math.random() * backdropTypes.length)];
    }
    // 2. Randomize Top (Hairstyle / Headwear)
    if (topTypes.length === 0)
        return newProps;
    const topType = topTypes[Math.floor(Math.random() * topTypes.length)];
    newProps.topType = topType;
    const isShortHair = topType.startsWith('ShortHair') || topType === 'NoHair' || topType === 'Eyepatch';
    const isLongHair = topType.startsWith('LongHair');
    const isWinterHat = topType.startsWith('WinterHat');
    const isHat = topType === 'Hat' || isWinterHat;
    const isHijab = topType === 'Hijab';
    // 3. Randomize Hair Color (with Pink bias)
    let hairColor = 'BrownDark';
    if (hairColors.length > 0) {
        const pinkColors = hairColors.filter((c) => c.toLowerCase().includes('pink'));
        const nonPinkColors = hairColors.filter((c) => !c.toLowerCase().includes('pink'));
        const pinkChance = isLongHair ? 0.15 : 0.02;
        if (pinkColors.length > 0 && Math.random() < pinkChance) {
            hairColor = pinkColors[Math.floor(Math.random() * pinkColors.length)];
        }
        else if (nonPinkColors.length > 0) {
            hairColor = nonPinkColors[Math.floor(Math.random() * nonPinkColors.length)];
        }
        else {
            hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
        }
    }
    newProps.hairColor = hairColor;
    // 4. Randomize Hat Color (if wearing a hat)
    let hatColor = 'Black';
    if (isHat && hatColors.length > 0) {
        hatColor = hatColors[Math.floor(Math.random() * hatColors.length)];
        newProps.hatColor = hatColor;
    }
    // 5. Randomize Facial Hair (coordinating presence and matching color probabilistically)
    if (facialHairTypes.length > 0) {
        let facialHairChance = 0.25;
        if (isHijab) {
            facialHairChance = 0.005;
        }
        else if (isShortHair) {
            facialHairChance = 0.40;
        }
        else if (isLongHair) {
            facialHairChance = 0.15;
        }
        if (hairColor.toLowerCase().includes('pink')) {
            facialHairChance = 0.03;
        }
        const hasFacialHair = Math.random() < facialHairChance;
        const nonBlankFacialHair = facialHairTypes.filter((f) => f !== 'Blank');
        if (hasFacialHair && nonBlankFacialHair.length > 0) {
            newProps.facialHairType = nonBlankFacialHair[Math.floor(Math.random() * nonBlankFacialHair.length)];
            const shouldMatchColor = Math.random() < 0.85;
            if (shouldMatchColor && facialHairColors.includes(hairColor)) {
                newProps.facialHairColor = hairColor;
            }
            else if (facialHairColors.length > 0) {
                newProps.facialHairColor = facialHairColors[Math.floor(Math.random() * facialHairColors.length)];
            }
            else {
                newProps.facialHairColor = hairColor;
            }
        }
        else {
            newProps.facialHairType = 'Blank';
            newProps.facialHairColor = 'Blank';
        }
    }
    // 6. Randomize Clothing balanced with headwear style
    if (clotheTypes.length > 0) {
        let restrictedClothes = [...clotheTypes];
        const shouldCoordinateOutfit = Math.random() < 0.85;
        if (shouldCoordinateOutfit) {
            if (isWinterHat) {
                restrictedClothes = clotheTypes.filter((c) => c === 'Hoodie' || c === 'CollarSweater' || c === 'BlazerSweater' || c === 'Overall');
            }
            else if (topType === 'Hat') {
                restrictedClothes = clotheTypes.filter((c) => c === 'Hoodie' || c === 'GraphicShirt' || c === 'ShirtCrewNeck' || c === 'ShirtVNeck' || c === 'ShirtScoopNeck' || c === 'Overall');
            }
        }
        if (restrictedClothes.length === 0) {
            restrictedClothes = [...clotheTypes];
        }
        newProps.clotheType = restrictedClothes[Math.floor(Math.random() * restrictedClothes.length)];
    }
    // 7. Randomize Clothing Color coordinated with Hat Color
    if (clotheColors.length > 0) {
        const shouldMatchHat = isHat && clotheColors.includes(hatColor) && Math.random() < 0.35;
        if (shouldMatchHat) {
            newProps.clotheColor = hatColor;
        }
        else {
            newProps.clotheColor = clotheColors[Math.floor(Math.random() * clotheColors.length)];
        }
    }
    // 8. Randomize remaining properties normally
    const otherKeys = {
        accessoriesType: accessoriesTypes,
        graphicType: graphicTypes,
        eyeType: eyeTypes,
        eyebrowType: eyebrowTypes,
        mouthType: mouthTypes,
        skinColor: skinColors
    };
    for (const [key, opts] of Object.entries(otherKeys)) {
        if (opts.length > 0) {
            newProps[key] = opts[Math.floor(Math.random() * opts.length)];
        }
    }
    // 9. Randomize Backdrop Color (strongly avoiding matching character colors)
    if (backdropColors.length > 0) {
        const activeFamilies = new Set();
        const addColorFamily = (colorName) => {
            if (colorName && colorName !== 'Blank') {
                activeFamilies.add(getColorFamily(colorName));
            }
        };
        addColorFamily(newProps.clotheColor);
        if (isHat) {
            addColorFamily(newProps.hatColor);
        }
        const hairIsVisible = !isHijab && !isWinterHat && topType !== 'NoHair' && topType !== 'Eyepatch';
        if (hairIsVisible) {
            addColorFamily(newProps.hairColor);
        }
        if (newProps.facialHairType && newProps.facialHairType !== 'Blank') {
            addColorFamily(newProps.facialHairColor);
        }
        const safeBackdropColors = backdropColors.filter((color) => {
            const family = getColorFamily(color);
            return !activeFamilies.has(family);
        });
        if (safeBackdropColors.length > 0) {
            newProps.backdropColor = safeBackdropColors[Math.floor(Math.random() * safeBackdropColors.length)];
        }
        else {
            newProps.backdropColor = backdropColors[Math.floor(Math.random() * backdropColors.length)];
        }
    }
    return newProps;
}
/* Base-62 Hashing System */
const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const HASH_ORDER = [
    'backdropType',
    'backdropColor',
    'topType',
    'accessoriesType',
    'hatColor',
    'hairColor',
    'facialHairType',
    'facialHairColor',
    'clotheType',
    'clotheColor',
    'graphicType',
    'eyeType',
    'eyebrowType',
    'mouthType',
    'skinColor'
];
export const DEFAULT_AVATAR_PROPS = {
    backdropType: 'Diamond',
    backdropColor: 'PastelBlue',
    topType: 'ShortHairShortFlat',
    accessoriesType: 'Prescription02',
    hairColor: 'Black',
    hatColor: 'Black',
    facialHairType: 'BeardLight',
    facialHairColor: 'BrownDark',
    clotheType: 'BlazerShirt',
    clotheColor: 'Heather',
    graphicType: 'Bat',
    eyeType: 'Side',
    eyebrowType: 'Default',
    mouthType: 'Default',
    skinColor: 'Tanned'
};
export function getOptionList(key) {
    switch (key) {
        case 'backdropType': return BACKDROP_TYPES;
        case 'backdropColor': return Array.from(backdropColorPalette.keys());
        case 'topType': return TOP_TYPES;
        case 'accessoriesType': return ACCESSORIES_TYPES;
        case 'hatColor': return Array.from(hatColorPalette.keys());
        case 'hairColor': return Array.from(hairColorPalette.keys());
        case 'facialHairType': return FACIAL_HAIR_TYPES;
        case 'facialHairColor': return Array.from(facialHairColorPalette.keys());
        case 'clotheType': return CLOTHE_TYPES;
        case 'clotheColor': return Array.from(clotheColorPalette.keys());
        case 'graphicType': return GRAPHIC_TYPES;
        case 'eyeType': return EYE_TYPES;
        case 'eyebrowType': return EYEBROW_TYPES;
        case 'mouthType': return MOUTH_TYPES;
        case 'skinColor': return Array.from(skinColorPalette.keys());
        default: return [];
    }
}
export function getAvatarHash(config) {
    let hash = '';
    for (const key of HASH_ORDER) {
        const list = getOptionList(key);
        const val = config[key] || DEFAULT_AVATAR_PROPS[key];
        let index = list.indexOf(val);
        if (index === -1) {
            // Fallback to default option index
            index = list.indexOf(DEFAULT_AVATAR_PROPS[key]);
            if (index === -1)
                index = 0;
        }
        // Encode to base62 character
        const char = BASE62[index] || '0';
        hash += char;
    }
    return hash;
}
export function getAvatarConfigFromHash(hash) {
    const config = {};
    // Safely default if hash is invalid or missing characters
    const cleanHash = (hash || '').trim();
    HASH_ORDER.forEach((key, i) => {
        const list = getOptionList(key);
        const char = cleanHash[i];
        if (!char) {
            config[key] = DEFAULT_AVATAR_PROPS[key];
            return;
        }
        const index = BASE62.indexOf(char);
        if (index === -1 || index >= list.length) {
            config[key] = DEFAULT_AVATAR_PROPS[key];
        }
        else {
            config[key] = list[index];
        }
    });
    return config;
}
