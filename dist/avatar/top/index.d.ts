import * as React from 'react';
export interface Props {
    uid: string;
    children?: React.ReactNode;
}
export default class Top extends React.Component<Props> {
    render(): React.JSX.Element;
}
