import React, { type ReactNode } from 'react';
import Option from './Option';
export interface Props {
    option: Option;
    children?: ReactNode;
    defaultOption: any;
}
export declare const Selector: React.FC<Props>;
export default Selector;
