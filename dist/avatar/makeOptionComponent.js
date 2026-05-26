import React from 'react';
import SvgDictionaryRenderer from './SvgDictionaryRenderer';
import { SVG_DICTIONARY } from './svgDictionary';
export function makeOptionComponent(category, name) {
    const OptionComp = (props) => {
        const node = SVG_DICTIONARY[category]?.[name];
        if (!node) {
            throw new Error(`SVG node not found in dictionary for category: ${category}, name: ${name}`);
        }
        return (React.createElement(SvgDictionaryRenderer, { node: node, uid: props.uid, category: category, optionName: name }, props.children));
    };
    const anyComp = OptionComp;
    anyComp.displayName = name;
    anyComp.optionValue = name;
    return anyComp;
}
