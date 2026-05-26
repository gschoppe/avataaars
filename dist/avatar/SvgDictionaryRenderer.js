import React from 'react';
// Import subcomponents to inject dynamically at runtime
import FacialHair from './top/facialHair';
import HairColor from './top/HairColor';
import Accessories from './top/accessories';
import BackdropColor from './backdrop/BackdropColor';
import ClotheColor from './clothes/ClotheColor';
import HatColor from './top/HatColor';
import Skin from './Skin';
import Graphics from './clothes/Graphics';
import FacialHairColor from './top/facialHair/FacialHairColor';
import { registeredGradients } from '../index';
export const SvgDictionaryRenderer = (props) => {
    const { node, uid, children } = props;
    if (!node)
        return null;
    // Parameterize strings containing {uid} recursively in props
    // Parameterize strings containing {uid} recursively in props
    const resolveProps = (rawProps) => {
        if (!rawProps)
            return {};
        const resolved = {};
        // First, copy and parameterize strings
        Object.entries(rawProps).forEach(([key, val]) => {
            if (typeof val === 'string') {
                // Strip the $ prefix from interpolations to make them clean
                let processedVal = val.replace(/\${uid}/g, '{uid}').replace(/\${uid}/g, '{uid}');
                processedVal = processedVal.replace(/{uid}/g, uid).replace(/{uid}/g, uid);
                // Handle backticked string expressions like `url(#${clothingColorMask})`
                // Resolve early so it can be matched by subsequent filters
                if (processedVal.startsWith('`') && processedVal.endsWith('`')) {
                    processedVal = processedVal.substring(1, processedVal.length - 1);
                    processedVal = processedVal.replace(/\${([^}]+)}/g, '$1');
                }
                // Handle dynamic string concatenations like "'#' + path4" or "'#' + path5"
                const concatMatch = processedVal.match(/^'#' \+ (path|filter|mask|accessories)([0-9]+)$/);
                if (concatMatch) {
                    processedVal = `#${uid}-top-${concatMatch[1]}${concatMatch[2]}`;
                }
                // Handle dynamic URL filters like "url(#path4)"
                const urlMatch = processedVal.match(/url\(#(path|filter|mask|accessories)([0-9]+)\)/g);
                if (urlMatch) {
                    processedVal = processedVal.replace(/url\(#(path|filter|mask|accessories)([0-9]+)\)/g, `url(#${uid}-top-$1$2)`);
                }
                // Handle style objects represented as strings (e.g. "{ mixBlendMode: 'screen' }")
                if (key === 'style') {
                    const match = processedVal.match(/\{\s*([a-zA-Z0-9_]+)\s*:\s*['"]([^'"]+)['"]\s*\}/);
                    if (match) {
                        resolved[key] = { [match[1]]: match[2] };
                        return;
                    }
                }
                // Map legacy static mask/filter names to fully qualified dynamic ones
                processedVal = processedVal.replace(/url\(#clothingColorMask\)/gi, `url(#${uid}-Clothing-Color-Mask)`);
                processedVal = processedVal.replace(/url\(#hatColorMask\)/g, `url(#${uid}-Hat-Color-Mask)`);
                processedVal = processedVal.replace(/url\(#facialHairMask\)/g, `url(#${uid}-Facial-Hair-Mask)`);
                processedVal = processedVal.replace(/url\(#hairColorMask\)/g, `url(#${uid}-Hair-Color-Mask)`);
                // Also map raw ID references
                processedVal = processedVal.replace(/#clothingColorMask/gi, `#${uid}-Clothing-Color-Mask`);
                processedVal = processedVal.replace(/#hatColorMask/g, `#${uid}-Hat-Color-Mask`);
                processedVal = processedVal.replace(/#facialHairMask/g, `#${uid}-Facial-Hair-Mask`);
                processedVal = processedVal.replace(/#hairColorMask/g, `#${uid}-Hair-Color-Mask`);
                // resolved via compile-time mapping
                for (const gradName of registeredGradients.keys()) {
                    processedVal = processedVal.replace(new RegExp(`url\\(#${gradName}\\)`, 'g'), `url(#${uid}-gradient-${gradName})`);
                    processedVal = processedVal.replace(new RegExp(`#${gradName}`, 'g'), `#${uid}-gradient-${gradName}`);
                }
                resolved[key] = processedVal;
            }
            else {
                resolved[key] = val;
            }
        });
        // Remap raw path/filter/mask IDs like "path4" or "path5"
        if (resolved.id && typeof resolved.id === 'string') {
            const idMatch = resolved.id.match(/^(path|filter|mask|accessories)([0-9]+)$/);
            if (idMatch) {
                resolved.id = `${uid}-top-${idMatch[1]}${idMatch[2]}`;
            }
        }
        // Remap mask/filter id attributes dynamically to match the color component masks
        if (resolved.id === 'clothingColorMask' || resolved.id === 'ClothingColorMask') {
            resolved.id = `${uid}-Clothing-Color-Mask`;
        }
        else if (resolved.id === 'hatColorMask') {
            resolved.id = `${uid}-Hat-Color-Mask`;
        }
        else if (resolved.id === 'facialHairMask') {
            resolved.id = `${uid}-Facial-Hair-Mask`;
        }
        else if (resolved.id === 'hairColorMask') {
            resolved.id = `${uid}-Hair-Color-Mask`;
        }
        // Detect if we have an id that is just "{uid}" or "uid" and a top-level suffix attribute
        let idSuffix = '';
        Object.keys(resolved).forEach((key) => {
            if (key.startsWith('-') && !key.startsWith('--')) {
                idSuffix = key.substring(1); // remove leading "-"
                delete resolved[key]; // remove the invalid boolean prop
            }
        });
        if (idSuffix && (resolved.id === '{uid}' || resolved.id === 'uid' || resolved.id === uid)) {
            resolved.id = `${uid}-${idSuffix}`;
        }
        return resolved;
    };
    const { type, props: nodeProps, children: nodeChildren } = node;
    const resolvedProps = resolveProps(nodeProps);
    // Render subcomponents or standard SVG tags
    switch (type) {
        case '':
        case 'React.Fragment':
            return (React.createElement(React.Fragment, null, nodeChildren && nodeChildren.map((child, index) => (React.createElement(SvgDictionaryRenderer, { key: index, node: child, uid: uid }, children)))));
        case 'Children':
            return React.createElement(React.Fragment, null, children);
        case 'FacialHair':
            return React.createElement(FacialHair, { uid: uid });
        case 'HairColor':
            return React.createElement(HairColor, { uid: uid });
        case 'Accessories':
            return React.createElement(Accessories, { uid: uid });
        case 'BackdropColor':
            return React.createElement(BackdropColor, { uid: uid, defaultColor: resolvedProps.defaultColor });
        case 'ClotheColor':
        case 'Colors':
            return React.createElement(ClotheColor, { uid: uid });
        case 'HatColor':
            return React.createElement(HatColor, { uid: uid });
        case 'Skin':
            return React.createElement(Skin, { uid: uid });
        case 'Graphics':
            return React.createElement(Graphics, { uid: uid });
        case 'FacialHairColor':
            return React.createElement(FacialHairColor, { uid: uid });
        case 'text':
            const txt = resolvedProps.text || '';
            if (txt.trim().startsWith('{/*') && txt.trim().endsWith('*/}')) {
                return null;
            }
            return React.createElement(React.Fragment, null, txt);
        default:
            const Tag = type;
            return (React.createElement(Tag, { ...resolvedProps }, nodeChildren && nodeChildren.map((child, index) => (React.createElement(SvgDictionaryRenderer, { key: index, node: child, uid: uid }, children)))));
    }
};
export default SvgDictionaryRenderer;
