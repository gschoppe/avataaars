import * as React from 'react';
import { HairColorOption, Selector } from '../../options';
export const hairColorPalette = new Map();
export function makeHairColor(name, color) {
    class ColorComponent extends React.Component {
        render() {
            return (React.createElement("g", { id: `${this.props.uid}-HairColor/${name}`, mask: `url(#${this.props.uid}-Hair-Color-Mask)`, fill: color },
                React.createElement("g", { transform: 'translate(0.000000, 0.000000) ', id: 'Color' },
                    React.createElement("rect", { x: '0', y: '0', width: '264', height: '280' }))));
        }
    }
    const anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    hairColorPalette.set(name, anyComponent);
    return anyComponent;
}
makeHairColor('Auburn', '#A55728');
makeHairColor('Black', '#2C1B18');
makeHairColor('Blonde', '#B58143');
makeHairColor('BlondeGolden', '#D6B370');
makeHairColor('Brown', '#724133');
makeHairColor('BrownDark', '#4A312C');
makeHairColor('PastelPink', '#F59797');
makeHairColor('Blue', '#000fdb');
makeHairColor('Platinum', '#ECDCBF');
makeHairColor('Red', '#C93305');
makeHairColor('SilverGray', '#E8E1E1');
export default class HairColor extends React.Component {
    render() {
        return (React.createElement(Selector, { option: HairColorOption, defaultOption: 'BrownDark' }, Array.from(hairColorPalette.values()).map((ColorComponent, index) => (React.createElement(ColorComponent, { key: index, uid: this.props.uid })))));
    }
}
