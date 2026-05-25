import React from 'react';
import { Selector, BackdropOption } from '../../options';
import { makeOptionComponent } from '../makeOptionComponent';
const NoBackdrop = () => null;
const anyNoBackdrop = NoBackdrop;
anyNoBackdrop.displayName = 'NoBackdrop';
anyNoBackdrop.optionValue = 'NoBackdrop';
const Circle = makeOptionComponent('BACKDROP', 'Circle');
const Diamond = makeOptionComponent('BACKDROP', 'Diamond');
export default class Backdrop extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: Circle, option: BackdropOption },
            React.createElement(NoBackdrop, { uid: this.props.uid }),
            React.createElement(Circle, { uid: this.props.uid }),
            React.createElement(Diamond, { uid: this.props.uid })));
    }
}
