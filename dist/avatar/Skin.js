import React from 'react';
import { Selector, SkinOption } from '../options';
export const skinColorPalette = new Map();
export function makeSkinColor(name, color) {
    class ColorComponent extends React.Component {
        render() {
            const resolvedColor = color.replace(/{uid}/g, this.props.uid);
            return (React.createElement("g", { id: `${this.props.uid}-SkinColor/${name}`, mask: `url(#${this.props.uid}-Skin-Color-Mask)`, fill: resolvedColor },
                React.createElement("g", { transform: "translate(0.000000, 0.000000)", id: "Color" },
                    React.createElement("rect", { x: "0", y: "0", width: "264", height: "280" }))));
        }
    }
    const anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    skinColorPalette.set(name, anyComponent);
    return anyComponent;
}
makeSkinColor('Tanned', '#FD9841');
makeSkinColor('Yellow', '#F8D25C');
makeSkinColor('Pale', '#FFDBB4');
makeSkinColor('Light', '#EDB98A');
makeSkinColor('Brown', '#D08B5B');
makeSkinColor('DarkBrown', '#AE5D29');
makeSkinColor('Black', '#614335');
export default class Skin extends React.Component {
    render() {
        return (React.createElement(Selector, { option: SkinOption, defaultOption: 'Tanned' }, Array.from(skinColorPalette.values()).map((ColorComponent, index) => (React.createElement(ColorComponent, { key: index, uid: this.props.uid })))));
    }
}
