import * as React from 'react';
import { EyebrowOption, Selector } from '../../../options';
import { makeOptionComponent } from '../../makeOptionComponent';
const Angry = makeOptionComponent('EYEBROW', 'Angry');
const AngryNatural = makeOptionComponent('EYEBROW', 'AngryNatural');
const Default = makeOptionComponent('EYEBROW', 'Default');
const DefaultNatural = makeOptionComponent('EYEBROW', 'DefaultNatural');
const FlatNatural = makeOptionComponent('EYEBROW', 'FlatNatural');
const RaisedExcited = makeOptionComponent('EYEBROW', 'RaisedExcited');
const RaisedExcitedNatural = makeOptionComponent('EYEBROW', 'RaisedExcitedNatural');
const SadConcerned = makeOptionComponent('EYEBROW', 'SadConcerned');
const SadConcernedNatural = makeOptionComponent('EYEBROW', 'SadConcernedNatural');
const UnibrowNatural = makeOptionComponent('EYEBROW', 'UnibrowNatural');
const UpDown = makeOptionComponent('EYEBROW', 'UpDown');
const UpDownNatural = makeOptionComponent('EYEBROW', 'UpDownNatural');
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
