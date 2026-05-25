import * as React from 'react';
class Default extends React.Component {
    render() {
        return (React.createElement("g", { id: `${this.props.uid}-Eyes/Default-😀`, transform: 'translate(0.000000, 8.000000)', fillOpacity: '0.599999964' },
            React.createElement("circle", { id: `${this.props.uid}-Eye-Left`, cx: '30', cy: '22', r: '6' }),
            React.createElement("circle", { id: `${this.props.uid}-Eye-Right`, cx: '82', cy: '22', r: '6' })));
    }
}
Default.optionValue = 'Default';
export default Default;
