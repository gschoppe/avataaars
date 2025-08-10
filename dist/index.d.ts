import * as React from 'react';
export { default as Avatar } from './avatar';
export { Option, OptionContext, OptionsContext, allOptions } from './options';
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    backdropType?: string;
    backdropColor?: string;
    topType?: string;
    accessoriesType?: string;
    hairColor?: string;
    hatColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
    viewBox?: string;
}
export default class AvatarComponent extends React.Component<Props> {
    private optionContext;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    render(): React.JSX.Element;
    private updateOptionContext;
}
export declare class Piece extends React.Component<Props> {
    private optionContext;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    render(): React.JSX.Element;
    private updateOptionContext;
}
