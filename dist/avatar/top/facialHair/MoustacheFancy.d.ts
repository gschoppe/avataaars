import * as React from 'react';
export interface Props {
    uid: string;
}
export default class MoustacheFancy extends React.Component<Props> {
    static optionValue: string;
    render(): React.JSX.Element;
}
