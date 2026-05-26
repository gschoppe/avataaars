import * as React from 'react';
import { AccessoriesOption, Selector } from '../../../options';
import { makeOptionComponent } from '../../makeOptionComponent';
const Blank = () => null;
const anyBlank = Blank;
anyBlank.displayName = 'Blank';
anyBlank.optionValue = 'Blank';
const Kurt = makeOptionComponent('ACCESSORIES', 'Kurt');
const Prescription01 = makeOptionComponent('ACCESSORIES', 'Prescription01');
const Prescription02 = makeOptionComponent('ACCESSORIES', 'Prescription02');
const Round = makeOptionComponent('ACCESSORIES', 'Round');
const Sunglasses = makeOptionComponent('ACCESSORIES', 'Sunglasses');
const Wayfarers = makeOptionComponent('ACCESSORIES', 'Wayfarers');
export default class Accessories extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: anyBlank, option: AccessoriesOption },
            React.createElement(Blank, { uid: this.props.uid }),
            React.createElement(Kurt, { uid: this.props.uid }),
            React.createElement(Prescription01, { uid: this.props.uid }),
            React.createElement(Prescription02, { uid: this.props.uid }),
            React.createElement(Round, { uid: this.props.uid }),
            React.createElement(Sunglasses, { uid: this.props.uid }),
            React.createElement(Wayfarers, { uid: this.props.uid })));
    }
}
