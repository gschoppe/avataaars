import * as React from 'react';
class Squint extends React.Component {
    render() {
        const path1 = `${this.props.uid}-Eyes-path1`;
        const path2 = `${this.props.uid}-Eyes-path2`;
        const mask1 = `${this.props.uid}-Eyes-mask1`;
        const mask2 = `${this.props.uid}-Eyes-mask2`;
        return (React.createElement("g", { id: `${this.props.uid}-Eyes/Squint-😊`, transform: 'translate(0.000000, 8.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path1 }),
                React.createElement("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path2 })),
            React.createElement("g", { id: `${this.props.uid}-Eye-Left`, transform: 'translate(16.000000, 13.000000)' },
                React.createElement("mask", { id: mask1, fill: 'white' },
                    React.createElement("use", { xlinkHref: '#' + path1 })),
                React.createElement("use", { id: `${this.props.uid}-Eyeball-Left`, fill: '#FFFFFF', xlinkHref: '#' + path1 }),
                React.createElement("circle", { id: `${this.props.uid}-Pupil-Left`, fillOpacity: '0.699999988', fill: '#000000', mask: `url(#${mask1})`, cx: '14', cy: '10', r: '6' })),
            React.createElement("g", { id: `${this.props.uid}-Eye-Right`, transform: 'translate(68.000000, 13.000000)' },
                React.createElement("mask", { id: mask2, fill: 'white' },
                    React.createElement("use", { xlinkHref: '#' + path2 })),
                React.createElement("use", { id: `${this.props.uid}-Eyeball-Right`, fill: '#FFFFFF', xlinkHref: '#' + path2 }),
                React.createElement("circle", { id: `${this.props.uid}-Pupil-Right`, fillOpacity: '0.699999988', fill: '#000000', mask: `url(#${mask2})`, cx: '14', cy: '10', r: '6' }))));
    }
}
Squint.optionValue = 'Squint';
export default Squint;
