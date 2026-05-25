import React from 'react';
import CircleBackdrop from './CircleBackdrop';
import DiamondBackdrop from './DiamondBackdrop';
import NoBackdrop from './NoBackdrop';
import { Selector, BackdropOption } from '../../options';
export default class Backdrop extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: CircleBackdrop, option: BackdropOption },
            React.createElement(NoBackdrop, { uid: this.props.uid }),
            React.createElement(CircleBackdrop, { uid: this.props.uid }),
            React.createElement(DiamondBackdrop, { uid: this.props.uid })));
    }
}
