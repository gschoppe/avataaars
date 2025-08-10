import * as React from 'react';
export interface Props {
    uid: string;
}
export default class Surprised extends React.Component<Props> {
    static optionValue: string;
    render(): React.JSX.Element;
}
