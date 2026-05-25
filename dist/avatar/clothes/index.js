import * as React from 'react';
import BlazerShirt from './BlazerShirt';
import BlazerSweater from './BlazerSweater';
import CollarSweater from './CollarSweater';
import GraphicShirt from './GraphicShirt';
import Hoodie from './Hoodie';
import Overall from './Overall';
import ShirtCrewNeck from './ShirtCrewNeck';
import ShirtScoopNeck from './ShirtScoopNeck';
import ShirtVNeck from './ShirtVNeck';
import { ClotheOption, Selector } from '../../options';
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
