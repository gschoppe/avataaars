import * as React from 'react';
import Eyebrow from './eyebrow';
import Eyes from './eyes';
import Mouth from './mouth';
import Nose from './nose/Default';
export default class Face extends React.Component {
    render() {
        return (React.createElement("g", { id: `${this.props.uid}-Face`, transform: 'translate(76.000000, 82.000000)', fill: '#000000' },
            React.createElement(Mouth, { uid: this.props.uid }),
            React.createElement(Nose, { uid: this.props.uid }),
            React.createElement(Eyes, { uid: this.props.uid }),
            React.createElement(Eyebrow, { uid: this.props.uid })));
    }
}
