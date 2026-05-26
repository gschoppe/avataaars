import React from 'react';
import type { SvgNode } from './svgDictionary';
export interface Props {
    node: SvgNode;
    uid: string;
    children?: React.ReactNode;
}
export declare const SvgDictionaryRenderer: React.FC<Props>;
export default SvgDictionaryRenderer;
