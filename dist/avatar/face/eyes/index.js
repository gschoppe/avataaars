import * as React from 'react';
import { EyesOption, Selector } from '../../../options';
import { makeOptionComponent } from '../../makeOptionComponent';
const Close = makeOptionComponent('EYES', 'Close');
const Cry = makeOptionComponent('EYES', 'Cry');
const Default = makeOptionComponent('EYES', 'Default');
const Dizzy = makeOptionComponent('EYES', 'Dizzy');
const EyeRoll = makeOptionComponent('EYES', 'EyeRoll');
const Happy = makeOptionComponent('EYES', 'Happy');
const Hearts = makeOptionComponent('EYES', 'Hearts');
const Side = makeOptionComponent('EYES', 'Side');
const Squint = makeOptionComponent('EYES', 'Squint');
const Surprised = makeOptionComponent('EYES', 'Surprised');
const Wink = makeOptionComponent('EYES', 'Wink');
const WinkWacky = makeOptionComponent('EYES', 'WinkWacky');
export default class Eyes extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: Default, option: EyesOption },
            React.createElement(Close, { uid: this.props.uid }),
            React.createElement(Cry, { uid: this.props.uid }),
            React.createElement(Default, { uid: this.props.uid }),
            React.createElement(Dizzy, { uid: this.props.uid }),
            React.createElement(EyeRoll, { uid: this.props.uid }),
            React.createElement(Happy, { uid: this.props.uid }),
            React.createElement(Hearts, { uid: this.props.uid }),
            React.createElement(Side, { uid: this.props.uid }),
            React.createElement(Squint, { uid: this.props.uid }),
            React.createElement(Surprised, { uid: this.props.uid }),
            React.createElement(Wink, { uid: this.props.uid }),
            React.createElement(WinkWacky, { uid: this.props.uid })));
    }
}
