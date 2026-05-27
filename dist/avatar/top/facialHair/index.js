import * as React from 'react';
import { FacialHairOption, Selector } from '../../../options';
import { makeOptionComponent } from '../../makeOptionComponent';
const Blank = () => null;
const anyBlank = Blank;
anyBlank.displayName = 'Blank';
anyBlank.optionValue = 'Blank';
const BeardLight = makeOptionComponent('FACIAL_HAIR', 'BeardLight');
const BeardMajestic = makeOptionComponent('FACIAL_HAIR', 'BeardMajestic');
const BeardMedium = makeOptionComponent('FACIAL_HAIR', 'BeardMedium');
const MoustacheFancy = makeOptionComponent('FACIAL_HAIR', 'MoustacheFancy');
const MoustacheMagnum = makeOptionComponent('FACIAL_HAIR', 'MoustacheMagnum');
export default class FacialHair extends React.Component {
    render() {
        return (React.createElement(Selector, { option: FacialHairOption, defaultOption: BeardLight },
            React.createElement(Blank, { uid: this.props.uid }),
            React.createElement(BeardMedium, { uid: this.props.uid }),
            React.createElement(BeardLight, { uid: this.props.uid }),
            React.createElement(BeardMajestic, { uid: this.props.uid }),
            React.createElement(MoustacheFancy, { uid: this.props.uid }),
            React.createElement(MoustacheMagnum, { uid: this.props.uid })));
    }
}
