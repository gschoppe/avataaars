import React from 'react';
export interface Props {
    uid: string;
    defaultColor?: string;
}
export default class Colors extends React.Component<Props> {
    render(): React.JSX.Element;
}
