import React from 'react';
export interface Props {
    uid: string;
}
export default class Backdrop extends React.Component<Props> {
    render(): React.JSX.Element;
}
