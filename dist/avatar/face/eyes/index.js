import * as React from 'react';
import Close from './Close';
import Cry from './Cry';
import Default from './Default';
import Dizzy from './Dizzy';
import EyeRoll from './EyeRoll';
import Happy from './Happy';
import Hearts from './Hearts';
import Side from './Side';
import Squint from './Squint';
import Surprised from './Surprised';
import Wink from './Wink';
import WinkWacky from './WinkWacky';
import { EyesOption, Selector } from '../../../options';
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
