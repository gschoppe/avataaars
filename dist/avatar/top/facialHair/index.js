import * as React from 'react';
import BeardLight from './BeardLight';
import BeardMajestic from './BeardMajestic';
import BeardMedium from './BeardMedium';
import Blank from './Blank';
import MoustacheFancy from './MoustacheFancy';
import MoustacheMagnum from './MoustacheMagnum';
import { FacialHairOption, Selector } from '../../../options';
export default class FacialHair extends React.Component {
    render() {
        return (React.createElement(Selector, { option: FacialHairOption, defaultOption: Blank },
            React.createElement(Blank, { uid: this.props.uid }),
            React.createElement(BeardMedium, { uid: this.props.uid }),
            React.createElement(BeardLight, { uid: this.props.uid }),
            React.createElement(BeardMajestic, { uid: this.props.uid }),
            React.createElement(MoustacheFancy, { uid: this.props.uid }),
            React.createElement(MoustacheMagnum, { uid: this.props.uid })));
    }
}
