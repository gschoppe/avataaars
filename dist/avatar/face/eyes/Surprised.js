import * as React from 'react';
class Surprised extends React.Component {
    render() {
        return (React.createElement("g", { id: `${this.props.uid}-Eyes/Surprised-😳`, transform: 'translate(0.000000, 8.000000)' },
            React.createElement("g", { id: `${this.props.uid}-Eye-Left` },
                React.createElement("circle", { id: `${this.props.uid}-Eyeball-Left`, cx: '30', cy: '22', r: '14', fill: '#FFFFFF' }),
                React.createElement("circle", { id: `${this.props.uid}-Pupil-Left`, fillOpacity: '0.699999988', cx: '30', cy: '22', r: '6', fill: '#000000' })),
            React.createElement("g", { id: `${this.props.uid}-Eye-Right` },
                React.createElement("circle", { id: `${this.props.uid}-Eyeball-Right`, cx: '82', cy: '22', r: '14', fill: '#FFFFFF' }),
                React.createElement("circle", { id: `${this.props.uid}-Pupil-Right`, fillOpacity: '0.699999988', cx: '82', cy: '22', r: '6', fill: '#000000' }))));
    }
}
Surprised.optionValue = 'Surprised';
export default Surprised;
