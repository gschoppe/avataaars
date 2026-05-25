import * as React from 'react';
import { GraphicOption, Selector } from '../../options';
import { makeOptionComponent } from '../makeOptionComponent';
export const Skull = makeOptionComponent('CLOTHES', 'Skull');
export const SkullOutline = makeOptionComponent('CLOTHES', 'SkullOutline');
export const Bat = makeOptionComponent('CLOTHES', 'Bat');
export const Cumbia = makeOptionComponent('CLOTHES', 'Cumbia');
export const Deer = makeOptionComponent('CLOTHES', 'Deer');
export const Diamond = makeOptionComponent('CLOTHES', 'Diamond');
export const Hola = makeOptionComponent('CLOTHES', 'Hola');
export const Selena = makeOptionComponent('CLOTHES', 'Selena');
export const Pizza = makeOptionComponent('CLOTHES', 'Pizza');
export const Resist = makeOptionComponent('CLOTHES', 'Resist');
export const Bear = makeOptionComponent('CLOTHES', 'Bear');
export default class Graphics extends React.Component {
    render() {
        return (React.createElement(Selector, { option: GraphicOption, defaultOption: Skull },
            React.createElement(Bat, { uid: this.props.uid }),
            React.createElement(Cumbia, { uid: this.props.uid }),
            React.createElement(Deer, { uid: this.props.uid }),
            React.createElement(Diamond, { uid: this.props.uid }),
            React.createElement(Hola, { uid: this.props.uid }),
            React.createElement(Pizza, { uid: this.props.uid }),
            React.createElement(Resist, { uid: this.props.uid }),
            React.createElement(Selena, { uid: this.props.uid }),
            React.createElement(Bear, { uid: this.props.uid }),
            React.createElement(SkullOutline, { uid: this.props.uid }),
            React.createElement(Skull, { uid: this.props.uid })));
    }
}
