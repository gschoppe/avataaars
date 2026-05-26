export interface SvgNode {
    type: string;
    props?: Record<string, any>;
    children?: SvgNode[];
}
export declare const SVG_DICTIONARY: Record<string, Record<string, SvgNode>>;
