import React, { ReactNode } from 'react';
import Option from './Option';
import { OptionsContext } from './OptionContext';
export interface Props {
    option: Option;
    children?: ReactNode;
    defaultOption: React.ComponentClass | string;
}
export default class Selector extends React.Component<Props> {
    static contextType: React.Context<import("./OptionContext").OptionContext | null>;
    context: React.ContextType<typeof OptionsContext>;
    componentDidMount(): void;
    UNSAFE_componentWillUpdate(nextProps: Props & {
        children?: React.ReactNode;
    }): void;
    componentWillUnmount(): void;
    render(): null | undefined;
    private optionContextUpdate;
    private updateOptionValues;
}
