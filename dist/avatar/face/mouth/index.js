import * as React from 'react';
import { MouthOption, Selector } from '../../../options';
import { makeOptionComponent } from '../../makeOptionComponent';
const Concerned = makeOptionComponent('MOUTH', 'Concerned');
const Default = makeOptionComponent('MOUTH', 'Default');
const Disbelief = makeOptionComponent('MOUTH', 'Disbelief');
const Eating = makeOptionComponent('MOUTH', 'Eating');
const Grimace = makeOptionComponent('MOUTH', 'Grimace');
const Sad = makeOptionComponent('MOUTH', 'Sad');
const ScreamOpen = makeOptionComponent('MOUTH', 'ScreamOpen');
const Serious = makeOptionComponent('MOUTH', 'Serious');
const Smile = makeOptionComponent('MOUTH', 'Smile');
const Tongue = makeOptionComponent('MOUTH', 'Tongue');
const Twinkle = makeOptionComponent('MOUTH', 'Twinkle');
const Vomit = makeOptionComponent('MOUTH', 'Vomit');
export default class Mouth extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: Default, option: MouthOption },
            React.createElement(Concerned, { uid: this.props.uid }),
            React.createElement(Default, { uid: this.props.uid }),
            React.createElement(Disbelief, { uid: this.props.uid }),
            React.createElement(Eating, { uid: this.props.uid }),
            React.createElement(Grimace, { uid: this.props.uid }),
            React.createElement(Sad, { uid: this.props.uid }),
            React.createElement(ScreamOpen, { uid: this.props.uid }),
            React.createElement(Serious, { uid: this.props.uid }),
            React.createElement(Smile, { uid: this.props.uid }),
            React.createElement(Tongue, { uid: this.props.uid }),
            React.createElement(Twinkle, { uid: this.props.uid }),
            React.createElement(Vomit, { uid: this.props.uid })));
    }
}
