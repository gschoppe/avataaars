import * as React from 'react';
import Angry from './Angry';
import AngryNatural from './AngryNatural';
import Default from './Default';
import DefaultNatural from './DefaultNatural';
import FlatNatural from './FlatNatural';
import RaisedExcited from './RaisedExcited';
import RaisedExcitedNatural from './RaisedExcitedNatural';
import SadConcerned from './SadConcerned';
import SadConcernedNatural from './SadConcernedNatural';
import UnibrowNatural from './UnibrowNatural';
import UpDown from './UpDown';
import UpDownNatural from './UpDownNatural';
import { EyebrowOption, Selector } from '../../../options';
export default class Eyebrow extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: Default, option: EyebrowOption },
            React.createElement(Angry, { uid: this.props.uid }),
            React.createElement(AngryNatural, { uid: this.props.uid }),
            React.createElement(Default, { uid: this.props.uid }),
            React.createElement(DefaultNatural, { uid: this.props.uid }),
            React.createElement(FlatNatural, { uid: this.props.uid }),
            React.createElement(RaisedExcited, { uid: this.props.uid }),
            React.createElement(RaisedExcitedNatural, { uid: this.props.uid }),
            React.createElement(SadConcerned, { uid: this.props.uid }),
            React.createElement(SadConcernedNatural, { uid: this.props.uid }),
            React.createElement(UnibrowNatural, { uid: this.props.uid }),
            React.createElement(UpDown, { uid: this.props.uid }),
            React.createElement(UpDownNatural, { uid: this.props.uid })));
    }
}
