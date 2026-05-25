import * as React from 'react';
import { ClotheOption, Selector } from '../../options';
import { makeOptionComponent } from '../makeOptionComponent';
const BlazerShirt = makeOptionComponent('CLOTHES', 'BlazerShirt');
const BlazerSweater = makeOptionComponent('CLOTHES', 'BlazerSweater');
const CollarSweater = makeOptionComponent('CLOTHES', 'CollarSweater');
const GraphicShirt = makeOptionComponent('CLOTHES', 'GraphicShirt');
const Hoodie = makeOptionComponent('CLOTHES', 'Hoodie');
const Overall = makeOptionComponent('CLOTHES', 'Overall');
const ShirtCrewNeck = makeOptionComponent('CLOTHES', 'ShirtCrewNeck');
const ShirtScoopNeck = makeOptionComponent('CLOTHES', 'ShirtScoopNeck');
const ShirtVNeck = makeOptionComponent('CLOTHES', 'ShirtVNeck');
export default class Clothes extends React.Component {
    render() {
        return (React.createElement(Selector, { option: ClotheOption, defaultOption: BlazerShirt },
            React.createElement(BlazerShirt, { uid: this.props.uid }),
            React.createElement(BlazerSweater, { uid: this.props.uid }),
            React.createElement(CollarSweater, { uid: this.props.uid }),
            React.createElement(GraphicShirt, { uid: this.props.uid }),
            React.createElement(Hoodie, { uid: this.props.uid }),
            React.createElement(Overall, { uid: this.props.uid }),
            React.createElement(ShirtCrewNeck, { uid: this.props.uid }),
            React.createElement(ShirtScoopNeck, { uid: this.props.uid }),
            React.createElement(ShirtVNeck, { uid: this.props.uid })));
    }
}
