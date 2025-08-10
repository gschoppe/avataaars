import * as React from 'react';
export interface Props {
    uid: string;
    children?: React.ReactNode;
}
export default class ShortHairShaggy extends React.Component<Props> {
    static optionValue: string;
    render(): React.JSX.Element;
}
