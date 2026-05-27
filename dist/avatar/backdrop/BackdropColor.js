import React from 'react';
import { BackdropColorOption, Selector } from '../../options';
export const backdropColorPalette = new Map();
export function makeBackdropColor(name, color) {
    class ColorComponent extends React.Component {
        render() {
            const resolvedColor = color.replace(/{uid}/g, this.props.uid);
            return (React.createElement("g", { id: `${this.props.uid}-BackdropColor/${name}`, mask: `url(#${this.props.uid}-Backdrop-Color-Mask)`, fill: resolvedColor },
                React.createElement("rect", { id: `${this.props.uid}-🖍Color`, x: "0", y: "0", width: "280", height: "280" })));
        }
    }
    const anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    backdropColorPalette.set(name, anyComponent);
    return anyComponent;
}
makeBackdropColor('Black', '#262E33');
makeBackdropColor('Blue01', '#65C9FF');
makeBackdropColor('Blue02', '#5199E4');
makeBackdropColor('Blue03', '#25557C');
makeBackdropColor('Gray01', '#E6E6E6');
makeBackdropColor('Gray02', '#929598');
makeBackdropColor('Heather', '#3C4F5C');
makeBackdropColor('PastelBlue', '#B1E2FF');
makeBackdropColor('PastelGreen', '#A7FFC4');
makeBackdropColor('PastelOrange', '#FFDEB5');
makeBackdropColor('PastelRed', '#FFAFB9');
makeBackdropColor('PastelYellow', '#FFFFB1');
makeBackdropColor('Pink', '#FF488E');
makeBackdropColor('Red', '#FF5C5C');
makeBackdropColor('White', '#FFFFFF');
export default class BackdropColor extends React.Component {
    render() {
        return (React.createElement(Selector, { option: BackdropColorOption, defaultOption: this.props.defaultColor || 'PastelBlue' }, Array.from(backdropColorPalette.values()).map((ColorComponent, index) => {
            return React.createElement(ColorComponent, { key: index, uid: this.props.uid });
        })));
    }
}
