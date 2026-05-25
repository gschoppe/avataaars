import * as React from 'react';
import BackdropColor from './BackdropColor';
class DiamondBackdrop extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("g", { id: `${this.props.uid}-Diamond`, strokeWidth: "1", fillRule: "evenodd" },
                React.createElement("mask", { id: `${this.props.uid}-Backdrop-Color-Mask`, fill: "white" },
                    React.createElement("path", { d: "M12,160 L132,40 L252,160 L132,280 Z" })),
                React.createElement("path", { d: "M12,160 L132,40 L252,160 L132,280 Z", fill: "#E6E6E6" }),
                React.createElement(BackdropColor, { uid: this.props.uid, defaultColor: "Blue01" })),
            React.createElement("mask", { id: `${this.props.uid}-Backdrop-Mask`, fill: "white" },
                React.createElement("path", { d: "M-100,-100 V160, H12 L132,280 L252,160 H364 V-100 H-100 Z" }))));
    }
}
DiamondBackdrop.optionValue = 'Diamond';
export default DiamondBackdrop;
