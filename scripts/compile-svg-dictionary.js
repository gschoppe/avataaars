const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const OUTPUT_FILE = path.join(SRC_DIR, 'avatar', 'svgDictionary.ts');

function cleanJSX(jsxStr, catKey, optionVal) {
  let clean = jsxStr;

  // Clean backticks, props, variables, and expressions to yield standard XML
  clean = clean.replace(/`\$\{this\.props\.uid\}([^`]*)`/g, '{uid}$1');
  clean = clean.replace(/`\$\{this\.props\.uid\}/g, '{uid}');
  clean = clean.replace(/\{this\.props\.uid\}/g, '{uid}');
  clean = clean.replace(/\$\{this\.props\.uid\}/g, '{uid}');
  clean = clean.replace(/this\.props\.uid/g, '{uid}');

  // Determine currentCategory
  let currentCategory = '';
  if (catKey === 'TOP' && optionVal) {
    if (optionVal === 'LongHairBob' || optionVal === 'LongHairBun') {
      currentCategory = 'Hair';
    } else if (optionVal === 'Eyepatch') {
      currentCategory = 'Eyepatch';
    } else {
      currentCategory = 'top';
    }
  } else if (catKey === 'FACIAL_HAIR') {
    currentCategory = 'Facial-Hair';
  } else if (catKey === 'ACCESSORIES') {
    currentCategory = 'Accessories';
  } else if (catKey === 'TOP') {
    currentCategory = 'top';
  } else if (catKey === 'CLOTHES') {
    if (optionVal === 'Skull' || optionVal === 'SkullOutline' || optionVal === 'Bat' ||
        optionVal === 'Cumbia' || optionVal === 'Deer' || optionVal === 'Diamond' ||
        optionVal === 'Hola' || optionVal === 'Selena' || optionVal === 'Pizza' ||
        optionVal === 'Resist' || optionVal === 'Bear') {
      currentCategory = 'Graphic';
    } else {
      currentCategory = 'Clothing';
    }
  } else if (catKey === 'MOUTH') {
    currentCategory = 'Mouth';
  } else if (catKey === 'EYES') {
    currentCategory = 'Eyes';
  } else if (catKey === 'EYEBROW') {
    currentCategory = 'Eyebrows';
  }

  let pathPrefix = 'top-path';
  let maskPrefix = 'top-mask';
  let filterPrefix = 'top-filter';

  if (currentCategory === 'Clothing') {
    pathPrefix = 'Clothing-path';
    maskPrefix = 'Clothing-mask';
    filterPrefix = 'Clothing-filter';
  } else if (currentCategory === 'Graphic') {
    pathPrefix = 'Graphic-path';
    maskPrefix = 'Graphic-mask';
    filterPrefix = 'Graphic-filter';
  } else if (currentCategory === 'Mouth') {
    pathPrefix = 'Mouth-path';
    maskPrefix = 'Mouth-mask';
    filterPrefix = 'Mouth-filter';
  } else if (currentCategory === 'Accessories') {
    pathPrefix = 'accessories-path';
    maskPrefix = 'accessories-mask';
    filterPrefix = 'accessories-filter';
  } else if (currentCategory === 'Eyes') {
    pathPrefix = 'Eyes-path';
    maskPrefix = 'Eyes-mask';
    filterPrefix = 'Eyes-filter';
  } else if (currentCategory === 'Facial-Hair') {
    pathPrefix = 'Facial-Hair-path';
    maskPrefix = 'Facial-Hair-mask';
    filterPrefix = 'Facial-Hair-filter';
  } else if (currentCategory === 'Eyebrows') {
    pathPrefix = 'Eyebrows-path';
    maskPrefix = 'Eyebrows-mask';
    filterPrefix = 'Eyebrows-filter';
  } else if (currentCategory === 'Eyepatch') {
    pathPrefix = 'Eyepatch-path';
    maskPrefix = 'Eyepatch-mask';
    filterPrefix = 'Eyepatch-filter';
  } else if (currentCategory === 'Hair') {
    pathPrefix = 'Hair-Path-';
    maskPrefix = 'Hair-Mask-';
    filterPrefix = 'Hair-Filter-';
  }

  function getPathName(num) {
    if (currentCategory === 'Facial-Hair') {
      if (num === 1) {
        return optionVal === 'BeardLight' ? 'Facial-Hair-path1' : 'Facial-Hair-Path';
      }
      return `Facial-Hair-path${num}`;
    }
    if (currentCategory === 'Eyepatch' && num === 1) {
      return 'Eyepatch-Path';
    }
    if (currentCategory === 'Hair') {
      return `Hair-Path-${num}`;
    }
    return `${pathPrefix}${num}`;
  }

  function getMaskName(num) {
    if (currentCategory === 'Facial-Hair' && num === 1) {
      return 'Facial-Hair-Mask';
    }
    if (currentCategory === 'Eyepatch' && num === 1) {
      return 'Eyepatch-Mask';
    }
    if (currentCategory === 'Hair') {
      return `Hair-Mask-${num}`;
    }
    return `${maskPrefix}${num}`;
  }

  function getFilterName(num) {
    return `${filterPrefix}${num}`;
  }

  clean = clean.replace(/\{\s*path1\s*\}/g, `{uid}-${getPathName(1)}`);
  clean = clean.replace(/\{\s*path2\s*\}/g, `{uid}-${getPathName(2)}`);
  clean = clean.replace(/\{\s*path3\s*\}/g, `{uid}-${getPathName(3)}`);
  clean = clean.replace(/\{\s*mask1\s*\}/g, `{uid}-${getMaskName(1)}`);
  clean = clean.replace(/\{\s*mask2\s*\}/g, `{uid}-${getMaskName(2)}`);
  clean = clean.replace(/\{\s*hairMask\s*\}/g, '{uid}-Hair-Color-Mask');
  clean = clean.replace(/\{\s*filter1\s*\}/g, `{uid}-${getFilterName(1)}`);

  clean = clean.replace(/\{\s*'#'\s*\+\s*path1\s*\}/g, `#{uid}-${getPathName(1)}`);
  clean = clean.replace(/\{\s*'#'\s*\+\s*path2\s*\}/g, `#{uid}-${getPathName(2)}`);
  clean = clean.replace(/\{\s*'#'\s*\+\s*path3\s*\}/g, `#{uid}-${getPathName(3)}`);
  clean = clean.replace(/\{\s*'#'\s*\+\s*mask1\s*\}/g, `#{uid}-${getMaskName(1)}`);
  clean = clean.replace(/\{\s*'#'\s*\+\s*mask2\s*\}/g, `#{uid}-${getMaskName(2)}`);
  clean = clean.replace(/\{\s*'#'\s*\+\s*hairMask\s*\}/g, '#{uid}-Hair-Color-Mask');
  clean = clean.replace(/\{\s*'#'\s*\+\s*filter1\s*\}/g, `#{uid}-${getFilterName(1)}`);

  clean = clean.replace(/\{\s*`url\(#\${mask1}\)`\s*\}/g, `url(#{uid}-${getMaskName(1)})`);
  clean = clean.replace(/\{\s*`url\(#\${mask2}\)`\s*\}/g, `url(#{uid}-${getMaskName(2)})`);
  clean = clean.replace(/\{\s*`url\(#\${hairMask}\)`\s*\}/g, 'url(#{uid}-Hair-Color-Mask)');
  clean = clean.replace(/mask={`url\(#\${mask1}\)`}`/g, `mask="url(#{uid}-${getMaskName(1)})"`);
  clean = clean.replace(/mask={`url\(#\${mask2}\)`}`/g, `mask="url(#{uid}-${getMaskName(2)})"`);
  clean = clean.replace(/mask={`url\(#\${hairMask}\)`}`/g, 'mask="url(#{uid}-Hair-Color-Mask)"');
  clean = clean.replace(/mask={`url\(#\${this.props.uid}-Clothing-Color-Mask\)`}/g, 'mask="url(#{uid}-Clothing-Color-Mask)"');
  clean = clean.replace(/mask=\{"url\(#" \+ this.props.uid \+ "-Backdrop-Mask\)"\}/g, 'mask="url(#{uid}-Backdrop-Mask)"');

  clean = clean.replace(/\{\s*this\.props\.children\s*\}/g, '<Children />');
  clean = clean.replace(/<FacialHair\s+uid=\{.*?\}\s*\/>/g, '<FacialHair />');
  clean = clean.replace(/<HairColor\s+uid=\{.*?\}\s*\/>/g, '<HairColor />');
  clean = clean.replace(/<Accessories\s+uid=\{.*?\}\s*\/>/g, '<Accessories />');

  // Compile-time linearGradient resolution
  clean = clean.replace(/id="linearGradient1"/g, 'id="{uid}-accessories-linearGradient1"');
  clean = clean.replace(/id="linearGradient2"/g, 'id="{uid}-accessories-linearGradient2"');
  clean = clean.replace(/id=\{linearGradient1\}/g, 'id="{uid}-accessories-linearGradient1"');
  clean = clean.replace(/id=\{linearGradient2\}/g, 'id="{uid}-accessories-linearGradient2"');
  clean = clean.replace(/fill="url\(#linearGradient1\)"/g, 'fill="url(#{uid}-accessories-linearGradient1)"');
  clean = clean.replace(/fill="url\(#linearGradient2\)"/g, 'fill="url(#{uid}-accessories-linearGradient2)"');
  clean = clean.replace(/fill=\{"url\(#linearGradient1\)"\}/g, 'fill="url(#{uid}-accessories-linearGradient1)"');
  clean = clean.replace(/fill=\{"url\(#linearGradient2\)"\}/g, 'fill="url(#{uid}-accessories-linearGradient2)"');
  clean = clean.replace(/fill={`url\(#\${linearGradient1}\)`}/g, 'fill="url(#{uid}-accessories-linearGradient1)"');
  clean = clean.replace(/fill={`url\(#\${linearGradient2}\)`}/g, 'fill="url(#{uid}-accessories-linearGradient2)"');
  clean = clean.replace(/\{\s*linearGradient1\s*\}/g, '{uid}-accessories-linearGradient1');
  clean = clean.replace(/\{\s*linearGradient2\s*\}/g, '{uid}-accessories-linearGradient2');
  clean = clean.replace(/`url\(#\${linearGradient1}\)`/g, 'url(#{uid}-accessories-linearGradient1)');
  clean = clean.replace(/`url\(#\${linearGradient2}\)`/g, 'url(#{uid}-accessories-linearGradient2)');

  return clean;
}

function parseJSXToTree(xmlStr) {
  xmlStr = xmlStr.trim();
  let index = 0;

  function skipWhitespace() {
    while (index < xmlStr.length && /\s/.test(xmlStr[index])) {
      index++;
    }
  }

  function parseNode() {
    skipWhitespace();
    if (index >= xmlStr.length) return null;

    if (xmlStr[index] !== '<') {
      let text = '';
      while (index < xmlStr.length && xmlStr[index] !== '<') {
        text += xmlStr[index];
        index++;
      }
      text = text.trim();
      return text ? { type: 'text', props: { text } } : null;
    }

    index++; // skip '<'

    if (xmlStr.startsWith('!--', index)) {
      index += 3;
      const closeIdx = xmlStr.indexOf('-->', index);
      if (closeIdx !== -1) {
        index = closeIdx + 3;
      }
      return parseNode();
    }

    let tagName = '';
    while (index < xmlStr.length && !/\s|>|\//.test(xmlStr[index])) {
      tagName += xmlStr[index];
      index++;
    }

    const props = {};

    while (index < xmlStr.length) {
      skipWhitespace();
      if (index >= xmlStr.length) break;

      if (xmlStr[index] === '>') {
        index++;
        break;
      }

      if (xmlStr.startsWith('/>', index)) {
        index += 2;
        return { type: tagName, props, children: [] };
      }

      let attrName = '';
      while (index < xmlStr.length && !/\s|=|>|\//.test(xmlStr[index])) {
        attrName += xmlStr[index];
        index++;
      }

      skipWhitespace();
      if (xmlStr[index] === '=') {
        index++;
        skipWhitespace();

        let attrVal = '';
        if (xmlStr[index] === '"' || xmlStr[index] === "'") {
          const quote = xmlStr[index];
          index++;
          while (index < xmlStr.length && xmlStr[index] !== quote) {
            attrVal += xmlStr[index];
            index++;
          }
          index++;
        } else if (xmlStr[index] === '{') {
          index++;
          let braceCount = 1;
          while (index < xmlStr.length && braceCount > 0) {
            if (xmlStr[index] === '{') braceCount++;
            if (xmlStr[index] === '}') braceCount--;
            if (braceCount > 0) {
              attrVal += xmlStr[index];
            }
            index++;
          }
        } else {
          while (index < xmlStr.length && !/\s|>|\//.test(xmlStr[index])) {
            attrVal += xmlStr[index];
            index++;
          }
        }
        props[attrName] = attrVal;
      } else {
        props[attrName] = true;
      }
    }

    const children = [];
    const endTag = `</${tagName}>`;

    while (index < xmlStr.length) {
      skipWhitespace();
      if (xmlStr.startsWith(endTag, index)) {
        index += endTag.length;
        break;
      }

      const child = parseNode();
      if (child) {
        children.push(child);
      }
    }

    return { type: tagName, props, children };
  }

  return parseNode();
}

const classRegex = /export\s+(?:default\s+)?class\s+(\w+)\s+extends\s+React\.Component[\s\S]+?static\s+optionValue\s*=\s*['"](\w+)['"][\s\S]+?render\s*\(\)\s*\{([\s\S]+?)return\s*\(([\s\S]+?)\)\s*;?\s*\}?\s*\}/g;

const CATEGORIES = {
  BACKDROP: { dir: 'backdrop', files: [] },
  CLOTHES: { dir: 'clothes', files: [] },
  EYEBROW: { dir: 'face/eyebrow', files: [] },
  EYES: { dir: 'face/eyes', files: [] },
  MOUTH: { dir: 'face/mouth', files: [] },
  NOSE: { dir: 'face/nose', files: [] },
  ACCESSORIES: { dir: 'top/accessories', files: [] },
  FACIAL_HAIR: { dir: 'top/facialHair', files: [] },
  TOP: { dir: 'top', files: [], skipSubdirs: true }
};

const dictionary = {};

Object.entries(CATEGORIES).forEach(([catKey, catInfo]) => {
  dictionary[catKey] = {};
  const fullPath = path.join(SRC_DIR, 'avatar', catInfo.dir);

  if (!fs.existsSync(fullPath)) return;

  const files = fs.readdirSync(fullPath);
  files.forEach((file) => {
    // Skip index.tsx and palette color files
    if (file === 'index.tsx' || file.endsWith('Color.tsx') || file === 'ClotheColor.tsx' || file === 'HatColor.tsx') return;

    const filePath = path.join(fullPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && catInfo.skipSubdirs) return;
    if (!file.endsWith('.tsx')) return;

    const content = fs.readFileSync(filePath, 'utf8');

    // Reset regex index for safety
    classRegex.lastIndex = 0;

    let match;
    let found = false;
    while ((match = classRegex.exec(content)) !== null) {
      const optionVal = match[2];
      const jsxStr = match[4];
      const cleaned = cleanJSX(jsxStr, catKey, optionVal);
      try {
        const tree = parseJSXToTree(cleaned);
        if (tree) {
          dictionary[catKey][optionVal] = tree;
          found = true;
        }
      } catch (err) {
        console.error(`Failed parsing option "${optionVal}" in ${filePath}:`, err.message);
      }
    }

    // Fallback simple search if classRegex missed it (e.g. for standard default export components)
    if (!found) {
      const simpleReturnMatch = content.match(/return\s*\(([\s\S]+?)\)\s*;?\s*\}?\s*\}/);
      if (simpleReturnMatch) {
        const optionVal = path.basename(file, '.tsx');
        const jsxStr = simpleReturnMatch[1];
        const cleaned = cleanJSX(jsxStr, catKey, optionVal);
        try {
          const tree = parseJSXToTree(cleaned);
          if (tree) {
            dictionary[catKey][optionVal] = tree;
          }
        } catch (err) {
          console.error(`Failed fallback parsing in ${filePath}:`, err.message);
        }
      }
    }
  });
});

// Output TS file
const tsContent = `// Automatically generated by scripts/compile-svg-dictionary.js. Do not edit directly!

export interface SvgNode {
  type: string;
  props?: Record<string, any>;
  children?: SvgNode[];
}

export const SVG_DICTIONARY: Record<string, Record<string, SvgNode>> = ${JSON.stringify(dictionary, null, 2)};
`;

fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf8');
console.log(`Successfully compiled SVG path dictionary into ${OUTPUT_FILE}`);
