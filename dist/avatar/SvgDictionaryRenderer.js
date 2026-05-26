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
export const SvgDictionaryRenderer = (props) => {
    const { node, uid, children, optionName } = props;
    if (!node)
        return null;
    // Determine if the current node has an ID indicating a category
    let currentCategory = props.category || '';
    // Initialize currentCategory based on TOP/FACIAL_HAIR/etc. category passed from top level
    if (props.category === 'TOP' && optionName) {
        if (optionName === 'LongHairBob' || optionName === 'LongHairBun') {
            currentCategory = 'Hair';
        }
        else if (optionName === 'Eyepatch') {
            currentCategory = 'Eyepatch';
        }
        else {
            currentCategory = 'top';
        }
    }
    else if (props.category === 'FACIAL_HAIR') {
        currentCategory = 'Facial-Hair';
    }
    else if (props.category === 'ACCESSORIES') {
        currentCategory = 'Accessories';
    }
    else if (props.category === 'TOP') {
        currentCategory = 'top';
    }
    else if (props.category === 'CLOTHES' && optionName && (optionName === 'Skull' || optionName === 'SkullOutline' || optionName === 'Bat' ||
        optionName === 'Cumbia' || optionName === 'Deer' || optionName === 'Diamond' ||
        optionName === 'Hola' || optionName === 'Selena' || optionName === 'Pizza' ||
        optionName === 'Resist' || optionName === 'Bear')) {
        currentCategory = 'Graphic';
    }
    // Refine category based on the live ID of the node
    if (node.props && typeof node.props.id === 'string') {
        const id = node.props.id;
        if (id.includes('Clothing/Graphic/') || id.includes('Graphic')) {
            if (id.includes('Clothing/Graphic-Shirt')) {
                currentCategory = 'Clothing';
            }
            else {
                currentCategory = 'Graphic';
            }
        }
        else if (id.includes('Clothing/') || id.includes('clothing') || id.includes('Clothing')) {
            currentCategory = 'Clothing';
        }
        else if (id.includes('Mouth/')) {
            currentCategory = 'Mouth';
        }
        else if (id.includes('Winter-Hat') || id.includes('WinterHat')) {
            currentCategory = 'top';
        }
        else if (id.includes('Accessories/') || id.includes('Accewssories/')) {
            currentCategory = 'Accessories';
        }
        else if (id.includes('Eyes/') || id.includes('Eye-')) {
            currentCategory = 'Eyes';
        }
        else if (id.includes('Facial-Hair/') || id.includes('Facial-Hair') || id.includes('facialHair') || id.includes('Beard') || id.includes('Moustache') || id.includes('Mustache')) {
            currentCategory = 'Facial-Hair';
        }
        else if (id.includes('Eyebrows/') || id.includes('Eyebrow/') || id.includes('Eyebrow-')) {
            currentCategory = 'Eyebrows';
        }
        else if (id.includes('Eyepatch')) {
            currentCategory = 'Eyepatch';
        }
        else if (id.includes('Long-Hair/') || id.includes('Short-Hair/') || id.includes('hairColor') || id.includes('HairColor') || id.includes('Hair')) {
            if (optionName === 'LongHairBob' || optionName === 'LongHairBun') {
                currentCategory = 'Hair';
            }
            else {
                currentCategory = 'top';
            }
        }
        else if (id.includes('Top/')) {
            currentCategory = 'top';
        }
    }
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
                // Accessories linearGradient mapping
                processedVal = processedVal.replace(/url\(#linearGradient1\)/g, `url(#${uid}-accessories-linearGradient1)`);
                processedVal = processedVal.replace(/url\(#linearGradient2\)/g, `url(#${uid}-accessories-linearGradient2)`);
                processedVal = processedVal.replace(/#linearGradient1/g, `#${uid}-accessories-linearGradient1`);
                processedVal = processedVal.replace(/#linearGradient2/g, `#${uid}-accessories-linearGradient2`);
                // Remap references based on category
                if (currentCategory === 'Clothing') {
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-path1`, 'g'), `#${uid}-Clothing-path1`);
                    processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-path1\\)`, 'g'), `url(#${uid}-Clothing-path1)`);
                }
                else if (currentCategory === 'Graphic') {
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-path([0-9]+)`, 'g'), `#${uid}-Graphic-path$1`);
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-mask([0-9]+)`, 'g'), `#${uid}-Graphic-mask$1`);
                    processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-mask([0-9]+)\\)`, 'g'), `url(#${uid}-Graphic-mask$1)`);
                }
                else if (currentCategory === 'Mouth') {
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-path([0-9]+)`, 'g'), `#${uid}-Mouth-path$1`);
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-filter([0-9]+)`, 'g'), `#${uid}-Mouth-filter$1`);
                    processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-filter([0-9]+)\\)`, 'g'), `url(#${uid}-Mouth-filter$1)`);
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-mask([0-9]+)`, 'g'), `#${uid}-Mouth-mask$1`);
                    processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-mask([0-9]+)\\)`, 'g'), `url(#${uid}-Mouth-mask$1)`);
                }
                else if (currentCategory === 'Accessories') {
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-path([0-9]+)`, 'g'), `#${uid}-accessories-path$1`);
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-filter([0-9]+)`, 'g'), `#${uid}-accessories-filter$1`);
                    processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-filter([0-9]+)\\)`, 'g'), `url(#${uid}-accessories-filter$1)`);
                }
                else if (currentCategory === 'Eyes') {
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-path([0-9]+)`, 'g'), `#${uid}-Eyes-path$1`);
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-mask([0-9]+)`, 'g'), `#${uid}-Eyes-mask$1`);
                    processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-mask([0-9]+)\\)`, 'g'), `url(#${uid}-Eyes-mask$1)`);
                }
                else if (currentCategory === 'Facial-Hair') {
                    if (optionName === 'BeardLight') {
                        processedVal = processedVal.replace(new RegExp(`#${uid}-top-path1`, 'g'), `#${uid}-Facial-Hair-path1`);
                        processedVal = processedVal.replace(new RegExp(`#${uid}-top-mask1`, 'g'), `#${uid}-Facial-Hair-Mask`);
                        processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-mask1\\)`, 'g'), `url(#${uid}-Facial-Hair-Mask)`);
                    }
                    else {
                        processedVal = processedVal.replace(new RegExp(`#${uid}-top-path1`, 'g'), `#${uid}-Facial-Hair-Path`);
                        processedVal = processedVal.replace(new RegExp(`#${uid}-top-mask1`, 'g'), `#${uid}-Facial-Hair-Mask`);
                        processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-mask1\\)`, 'g'), `url(#${uid}-Facial-Hair-Mask)`);
                    }
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-path([0-9]+)`, 'g'), `#${uid}-Facial-Hair-path$1`);
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-mask([0-9]+)`, 'g'), `#${uid}-Facial-Hair-mask$1`);
                    processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-mask([0-9]+)\\)`, 'g'), `url(#${uid}-Facial-Hair-mask$1)`);
                }
                else if (currentCategory === 'Eyebrows') {
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-path([0-9]+)`, 'g'), `#${uid}-Eyebrows-path$1`);
                }
                else if (currentCategory === 'Eyepatch') {
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-path1`, 'g'), `#${uid}-Eyepatch-Path`);
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-mask1`, 'g'), `#${uid}-Eyepatch-Mask`);
                    processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-mask1\\)`, 'g'), `url(#${uid}-Eyepatch-Mask)`);
                }
                else if (currentCategory === 'Hair') {
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-path([0-9]+)`, 'g'), `#${uid}-Hair-Path-$1`);
                    processedVal = processedVal.replace(new RegExp(`#${uid}-top-mask([0-9]+)`, 'g'), `#${uid}-Hair-Mask-$1`);
                    processedVal = processedVal.replace(new RegExp(`url\\(#${uid}-top-mask([0-9]+)\\)`, 'g'), `url(#${uid}-Hair-Mask-$1)`);
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
        else if (resolved.id === 'linearGradient1' && currentCategory === 'Accessories') {
            resolved.id = `${uid}-accessories-linearGradient1`;
        }
        else if (resolved.id === 'linearGradient2' && currentCategory === 'Accessories') {
            resolved.id = `${uid}-accessories-linearGradient2`;
        }
        // Detect if we have an id that is just "{uid}" or "uid" or "{uid}" and a top-level suffix attribute
        let idSuffix = '';
        Object.keys(resolved).forEach((key) => {
            if (key.startsWith('-top-') || key.startsWith('-Hair-')) {
                // This is a parsed suffix token, e.g. "-top-path1"
                idSuffix = key.substring(1); // remove leading "-"
                delete resolved[key]; // remove the invalid boolean prop
            }
        });
        if (idSuffix && (resolved.id === '{uid}' || resolved.id === uid || resolved.id === '{uid}')) {
            let finalSuffix = idSuffix;
            if (currentCategory === 'Clothing') {
                finalSuffix = finalSuffix.replace('top-', 'Clothing-');
            }
            else if (currentCategory === 'Mouth') {
                finalSuffix = finalSuffix.replace('top-', 'Mouth-');
            }
            else if (currentCategory === 'Accessories') {
                finalSuffix = finalSuffix.replace('top-', 'accessories-');
            }
            else if (currentCategory === 'Eyes') {
                finalSuffix = finalSuffix.replace('top-', 'Eyes-');
            }
            else if (currentCategory === 'Facial-Hair') {
                if (optionName === 'BeardLight') {
                    finalSuffix = finalSuffix.replace('top-path1', 'Facial-Hair-path1');
                    finalSuffix = finalSuffix.replace('top-mask1', 'Facial-Hair-Mask');
                }
                else {
                    finalSuffix = finalSuffix.replace('top-path1', 'Facial-Hair-Path');
                    finalSuffix = finalSuffix.replace('top-mask1', 'Facial-Hair-Mask');
                }
                finalSuffix = finalSuffix.replace('top-', 'Facial-Hair-');
            }
            else if (currentCategory === 'Eyebrows') {
                finalSuffix = finalSuffix.replace('top-', 'Eyebrows-');
            }
            else if (currentCategory === 'Eyepatch') {
                finalSuffix = finalSuffix.replace('top-path1', 'Eyepatch-Path');
                finalSuffix = finalSuffix.replace('top-mask1', 'Eyepatch-Mask');
            }
            else if (currentCategory === 'Hair') {
                finalSuffix = finalSuffix.replace('top-path', 'Hair-Path-');
                finalSuffix = finalSuffix.replace('top-mask', 'Hair-Mask-');
            }
            else if (currentCategory === 'Graphic') {
                finalSuffix = finalSuffix.replace('top-', 'Graphic-');
            }
            resolved.id = `${uid}-${finalSuffix}`;
        }
        return resolved;
    };
    const { type, props: nodeProps, children: nodeChildren } = node;
    const resolvedProps = resolveProps(nodeProps);
    // Render subcomponents or standard SVG tags
    switch (type) {
        case '':
        case 'React.Fragment':
            return (React.createElement(React.Fragment, null, nodeChildren && nodeChildren.map((child, index) => (React.createElement(SvgDictionaryRenderer, { key: index, node: child, uid: uid, category: currentCategory, optionName: optionName }, children)))));
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
            return (React.createElement(Tag, { ...resolvedProps }, nodeChildren && nodeChildren.map((child, index) => (React.createElement(SvgDictionaryRenderer, { key: index, node: child, uid: uid, category: currentCategory, optionName: optionName }, children)))));
    }
};
export default SvgDictionaryRenderer;
