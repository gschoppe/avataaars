import * as React from 'react';
import Concerned from './Concerned';
import Default from './Default';
import Disbelief from './Disbelief';
import Eating from './Eating';
import Grimace from './Grimace';
import Sad from './Sad';
import ScreamOpen from './ScreamOpen';
import Serious from './Serious';
import Smile from './Smile';
import Tongue from './Tongue';
import Twinkle from './Twinkle';
import Vomit from './Vomit';
import { MouthOption, Selector } from '../../../options';
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
