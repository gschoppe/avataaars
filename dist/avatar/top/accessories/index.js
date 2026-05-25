import * as React from 'react';
import Blank from './Blank';
import Kurt from './Kurt';
import Prescription01 from './Prescription01';
import Prescription02 from './Prescription02';
import Round from './Round';
import Sunglasses from './Sunglasses';
import Wayfarers from './Wayfarers';
import { AccessoriesOption, Selector } from '../../../options';
export default class Accessories extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: Blank, option: AccessoriesOption },
            React.createElement(Blank, { uid: this.props.uid }),
            React.createElement(Kurt, { uid: this.props.uid }),
            React.createElement(Prescription01, { uid: this.props.uid }),
            React.createElement(Prescription02, { uid: this.props.uid }),
            React.createElement(Round, { uid: this.props.uid }),
            React.createElement(Sunglasses, { uid: this.props.uid }),
            React.createElement(Wayfarers, { uid: this.props.uid })));
    }
}
