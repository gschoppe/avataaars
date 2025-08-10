import * as React from 'react';
export interface Props {
    uid: string;
}
export default class Default extends React.Component<Props> {
    static optionValue: string;
    render(): React.JSX.Element;
}
