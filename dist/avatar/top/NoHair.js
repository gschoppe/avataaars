import * as React from 'react';
import FacialHair from './facialHair';
class NoHair extends React.Component {
    render() {
        const path1 = `${this.props.uid}-top-path1`;
        const mask1 = `${this.props.uid}-top-mask1`;
        const filter1 = `${this.props.uid}-top-filter1`;
        return (React.createElement("g", { id: `${this.props.uid}-Top`, strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: `${this.props.uid}-Top/No-Hair`, mask: `url(#${mask1})` },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement(FacialHair, { uid: this.props.uid }),
                    this.props.children))));
    }
}
NoHair.optionValue = 'NoHair';
export default NoHair;
