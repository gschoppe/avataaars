import * as React from 'react';
import { HatColorOption, Selector } from '../../options';
export const hatColorPalette = new Map();
export function makeHatColor(name, color) {
    class ColorComponent extends React.Component {
        render() {
            const resolvedColor = color.replace(/{uid}/g, this.props.uid);
            return (React.createElement("g", { id: `${this.props.uid}-HatColor/${name}`, mask: `url(#${this.props.uid}-Hat-Color-Mask)`, fillRule: 'evenodd', fill: resolvedColor },
                React.createElement("rect", { id: `${this.props.uid}-🖍Color`, x: '0', y: '0', width: '264', height: '280' })));
        }
    }
    const anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    hatColorPalette.set(name, anyComponent);
    return anyComponent;
}
makeHatColor('Black', '#262E33');
makeHatColor('Blue01', '#65C9FF');
makeHatColor('Blue02', '#5199E4');
makeHatColor('Blue03', '#25557C');
makeHatColor('Gray01', '#E6E6E6');
makeHatColor('Gray02', '#929598');
makeHatColor('Heather', '#3C4F5C');
makeHatColor('PastelBlue', '#B1E2FF');
makeHatColor('PastelGreen', '#A7FFC4');
makeHatColor('PastelOrange', '#FFDEB5');
makeHatColor('PastelRed', '#FFAFB9');
makeHatColor('PastelYellow', '#FFFFB1');
makeHatColor('Pink', '#FF488E');
makeHatColor('Red', '#FF5C5C');
makeHatColor('White', '#FFFFFF');
export default class Colors extends React.Component {
    render() {
        return (React.createElement(Selector, { option: HatColorOption, defaultOption: this.props.defaultColor || 'Gray01' }, Array.from(hatColorPalette.values()).map((ColorComponent, index) => (React.createElement(ColorComponent, { key: index, uid: this.props.uid })))));
    }
}
