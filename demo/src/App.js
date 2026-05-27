"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = require("react");
// Import source version
const index_1 = require("../../src/index");
// Import dist version
const index_2 = require("../../dist/index");
const App = () => {
    const [version, setVersion] = (0, react_1.useState)('src');
    // Setup options contexts
    const srcContext = (0, react_1.useMemo)(() => new index_1.OptionContext(index_1.allOptions), []);
    const distContext = (0, react_1.useMemo)(() => new index_2.OptionContext(index_2.allOptions), []);
    // Resolve imports based on selected version
    const isSrc = version === 'src';
    const Avatar = isSrc ? index_1.Avatar : index_2.Avatar;
    const OptionsContext = isSrc ? index_1.OptionsContext : index_2.OptionsContext;
    const allOptions = isSrc ? index_1.allOptions : index_2.allOptions;
    const addPaletteColor = isSrc ? index_1.addPaletteColor : index_2.addPaletteColor;
    const PALETTES = isSrc ? index_1.PALETTES : index_2.PALETTES;
    const generateRandomAvataarProps = isSrc ? index_1.generateRandomAvataarProps : index_2.generateRandomAvataarProps;
    const getAvatarHash = isSrc ? index_1.getAvatarHash : index_2.getAvatarHash;
    const getAvatarConfigFromHash = isSrc ? index_1.getAvatarConfigFromHash : index_2.getAvatarConfigFromHash;
    const activeContext = isSrc ? srcContext : distContext;
    // Avatar props state
    const [avatarProps, setAvatarProps] = (0, react_1.useState)({
        backdropType: 'Diamond',
        backdropColor: 'PastelBlue',
        topType: 'ShortHairShortFlat',
        accessoriesType: 'Prescription02',
        hairColor: 'Black',
        hatColor: 'Black',
        facialHairType: 'BeardLight',
        facialHairColor: 'BrownDark',
        clotheType: 'BlazerShirt',
        clotheColor: 'Heather',
        graphicType: 'Bat',
        eyeType: 'Side',
        eyebrowType: 'Default',
        mouthType: 'Default',
        skinColor: 'Tanned'
    });
    // Discovered option states dictionary from active context
    const [optionStates, setOptionStates] = (0, react_1.useState)(null);
    const [renderTick, setRenderTick] = (0, react_1.useState)(0);
    // Advanced color registration states
    const [selectedPalette, setSelectedPalette] = (0, react_1.useState)('HAIR');
    const [customColorName, setCustomColorName] = (0, react_1.useState)('');
    const [customColorVal, setCustomColorVal] = (0, react_1.useState)('#ec4899');
    const [isAdvancedOpen, setIsAdvancedOpen] = (0, react_1.useState)(false);
    const [copySuccess, setCopySuccess] = (0, react_1.useState)(false);
    const [hashInput, setHashInput] = (0, react_1.useState)('');
    const [hashCopySuccess, setHashCopySuccess] = (0, react_1.useState)(false);
    // Sync props state to the active OptionContext
    (0, react_1.useEffect)(() => {
        const data = {};
        Object.entries(avatarProps).forEach(([key, val]) => {
            if (val)
                data[key] = val;
        });
        activeContext.setData(data);
    }, [avatarProps, activeContext]);
    // Track discovered options from active OptionContext
    (0, react_1.useEffect)(() => {
        const handleUpdate = () => {
            const state = { ...activeContext.state };
            setOptionStates(state);
        };
        activeContext.addStateChangeListener(handleUpdate);
        handleUpdate();
        return () => {
            activeContext.removeStateChangeListener(handleUpdate);
        };
    }, [activeContext, renderTick]);
    // Randomize all options
    const handleRandomize = () => {
        const customOptions = {};
        if (optionStates) {
            Object.keys(optionStates).forEach((key) => {
                customOptions[key] = optionStates[key].options || [];
            });
        }
        const newProps = generateRandomAvataarProps(customOptions);
        setAvatarProps(newProps);
    };
    // Map option palette to component prop key
    const getOptionKeyForPalette = (palette) => {
        switch (palette) {
            case 'BACKDROP': return 'backdropColor';
            case 'SKIN': return 'skinColor';
            case 'HAIR': return 'hairColor';
            case 'FACIAL_HAIR': return 'facialHairColor';
            case 'CLOTHES': return 'clotheColor';
            case 'HAT': return 'hatColor';
            default: return null;
        }
    };
    // Register custom color
    const handleRegisterColor = (e) => {
        e.preventDefault();
        if (!customColorName.trim() || !customColorVal.trim())
            return;
        const cleanedName = customColorName.replace(/[^a-zA-Z0-9]/g, '');
        if (!cleanedName)
            return;
        // Dynamic registry call
        addPaletteColor(PALETTES[selectedPalette], cleanedName, customColorVal);
        // Trigger tick for context discovery
        setRenderTick((t) => t + 1);
        // Set selected property to this color
        const propKey = getOptionKeyForPalette(selectedPalette);
        if (propKey) {
            setAvatarProps((prev) => ({
                ...prev,
                [propKey]: cleanedName
            }));
        }
        setCustomColorName('');
    };
    // Copy JSX Code to clipboard
    const handleCopyCode = () => {
        const code = getJsxCode();
        navigator.clipboard.writeText(code).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        });
    };
    // Generate copyable JSX string
    const getJsxCode = () => {
        const propStrings = Object.entries(avatarProps)
            .filter(([_, val]) => val && val !== 'Blank' && val !== 'error')
            .map(([key, val]) => `  ${key}='${val}'`)
            .join('\n');
        return `import Avatar from '@gschoppe/avataaars'

<Avatar
  style={{ width: '264px', height: '280px' }}
${propStrings}
/>`;
    };
    // Control category groupings
    const controlGroups = [
        {
            title: 'Backdrop & Body',
            keys: ['backdropType', 'backdropColor', 'skinColor']
        },
        {
            title: 'Top & Hair',
            keys: ['topType', 'hairColor', 'hatColor', 'accessoriesType']
        },
        {
            title: 'Facial Hair & Eyes',
            keys: ['facialHairType', 'facialHairColor', 'eyeType', 'eyebrowType']
        },
        {
            title: 'Expression & Clothing',
            keys: ['mouthType', 'clotheType', 'clotheColor', 'graphicType']
        }
    ];
    return (react_1.default.createElement("div", { className: 'app-container' },
        react_1.default.createElement("header", { className: 'app-header' },
            react_1.default.createElement("div", { className: 'header-title-section' },
                react_1.default.createElement("h1", null, "Avataaars Sandbox"),
                react_1.default.createElement("p", null, "Modernized visual testing playground and avatar designer")),
            react_1.default.createElement("div", { className: 'header-controls' },
                react_1.default.createElement("div", { className: 'version-selector' },
                    react_1.default.createElement("button", { className: `version-btn ${version === 'src' ? 'active' : ''}`, onClick: () => setVersion('src') }, "Source (TSX)"),
                    react_1.default.createElement("button", { className: `version-btn ${version === 'dist' ? 'active' : ''}`, onClick: () => setVersion('dist') }, "Distribution (Build)")),
                react_1.default.createElement("button", { className: 'btn-randomize', onClick: handleRandomize },
                    react_1.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" },
                        react_1.default.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
                        react_1.default.createElement("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                        react_1.default.createElement("circle", { cx: "15.5", cy: "15.5", r: "1.5" }),
                        react_1.default.createElement("circle", { cx: "15.5", cy: "8.5", r: "1.5" }),
                        react_1.default.createElement("circle", { cx: "8.5", cy: "15.5", r: "1.5" }),
                        react_1.default.createElement("circle", { cx: "12", cy: "12", r: "1.5" })),
                    "Randomize Dice"))),
        react_1.default.createElement("main", { className: 'workspace-grid' },
            react_1.default.createElement("section", { className: 'preview-card' },
                react_1.default.createElement("span", { className: 'preview-badge' },
                    version,
                    " Mode"),
                react_1.default.createElement("div", { className: 'avatar-wrapper' },
                    react_1.default.createElement(OptionsContext.Provider, { value: activeContext },
                        react_1.default.createElement(Avatar, { style: { width: '264px', height: '280px' } }))),
                react_1.default.createElement("div", { className: 'code-panel', style: { width: '100%', marginTop: '16px' } },
                    react_1.default.createElement("div", { className: 'code-header', style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
                        react_1.default.createElement("span", null, "🔑 Avatar Hash Shorthand"),
                        react_1.default.createElement("button", { className: 'btn-copy', onClick: () => {
                            const hashStr = getAvatarHash(avatarProps);
                            navigator.clipboard.writeText(hashStr).then(() => {
                                setHashCopySuccess(true);
                                setTimeout(() => setHashCopySuccess(false), 2000);
                            });
                        } }, hashCopySuccess ? 'Copied!' : 'Copy Hash')),
                    react_1.default.createElement("div", { style: { padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' } },
                        react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#090d16', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' } },
                            react_1.default.createElement("code", { style: { fontSize: '14px', color: 'var(--accent)', fontWeight: 700, fontFamily: 'var(--font-mono)', letterSpacing: '1px', flex: 1, textAlign: 'center' } }, getAvatarHash(avatarProps))),
                        react_1.default.createElement("div", { style: { display: 'flex', gap: '8px' } },
                            react_1.default.createElement("input", {
                                type: 'text',
                                placeholder: 'Paste 15-char hash here to load...',
                                value: hashInput,
                                onChange: (e) => setHashInput(e.target.value.trim()),
                                style: {
                                    flex: 1,
                                    backgroundColor: '#090d16',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '6px',
                                    padding: '8px 12px',
                                    color: 'var(--text-main)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '12.5px',
                                    outline: 'none'
                                }
                            }),
                            react_1.default.createElement("button", {
                                type: 'button',
                                className: 'btn-randomize',
                                style: { margin: 0, padding: '0 16px', fontSize: '12px', fontWeight: 600, height: 'auto' },
                                onClick: () => {
                                    if (hashInput.length !== 15) {
                                        alert('Error: Avatar shorthand hashes must be exactly 15 characters!');
                                        return;
                                    }
                                    try {
                                        const decodedProps = getAvatarConfigFromHash(hashInput);
                                        setAvatarProps(decodedProps);
                                        setHashInput('');
                                    }
                                    catch (e) {
                                        alert('Error decoding avatar hash.');
                                    }
                                }
                            }, "Load")))),
                react_1.default.createElement("div", { className: 'code-panel', style: { width: '100%' } },
                    react_1.default.createElement("div", { className: 'code-header' },
                        react_1.default.createElement("span", null, "JSX Implementation"),
                        react_1.default.createElement("button", { className: 'btn-copy', onClick: handleCopyCode }, copySuccess ? 'Copied!' : 'Copy Code')),
                    react_1.default.createElement("pre", { className: 'code-pre' },
                        react_1.default.createElement("code", null, getJsxCode())))),
            react_1.default.createElement("section", { className: 'controls-container' },
                controlGroups.map((group, groupIdx) => (react_1.default.createElement("div", { className: 'control-card', key: groupIdx },
                    react_1.default.createElement("h2", null, group.title),
                    react_1.default.createElement("div", { className: 'control-grid' }, group.keys.map((key) => {
                        const state = optionStates?.[key];
                        const optionsList = state?.options || [];
                        const label = allOptions.find((o) => o.key === key)?.label || key;
                        return (react_1.default.createElement("div", { className: 'form-group', key: key },
                            react_1.default.createElement("label", { htmlFor: key }, label),
                            react_1.default.createElement("select", {
                                id: key, className: 'form-control', value: avatarProps[key] || '', onChange: (e) => setAvatarProps((prev) => ({
                                    ...prev,
                                    [key]: e.target.value
                                }))
                            }, optionsList.map((val) => (react_1.default.createElement("option", { key: val, value: val }, val))))));
                    }))))),
                react_1.default.createElement("div", { className: 'control-card' },
                    react_1.default.createElement("div", { className: 'advanced-header', onClick: () => setIsAdvancedOpen(!isAdvancedOpen) },
                        react_1.default.createElement("h2", null,
                            react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" },
                                react_1.default.createElement("circle", { cx: "12", cy: "12", r: "3" }),
                                react_1.default.createElement("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })),
                            "Advanced Custom Colors"),
                        react_1.default.createElement("span", { className: `advanced-toggle-icon ${isAdvancedOpen ? 'open' : ''}` }, "\u25BC")),
                    isAdvancedOpen && (react_1.default.createElement("div", { className: 'advanced-content' },
                        react_1.default.createElement("p", { style: { fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 8px 0' } }, "Register custom HEX colors dynamically into any palette. Registered colors will instantly populate in the options menus above!"),
                        react_1.default.createElement("form", { className: 'color-picker-grid', onSubmit: handleRegisterColor },
                            react_1.default.createElement("div", { className: 'form-group' },
                                react_1.default.createElement("label", { htmlFor: "palette-select" }, "Target Component"),
                                react_1.default.createElement("select", { id: "palette-select", className: 'form-control', value: selectedPalette, onChange: (e) => setSelectedPalette(e.target.value) }, Object.keys(PALETTES).map((p) => (react_1.default.createElement("option", { key: p, value: p }, p))))),
                            react_1.default.createElement("div", { className: 'form-group' },
                                react_1.default.createElement("label", { htmlFor: "color-name" }, "Color Name (alphanumeric)"),
                                react_1.default.createElement("input", { id: "color-name", type: 'text', placeholder: 'e.g., MintMagic', className: 'form-control', value: customColorName, onChange: (e) => setCustomColorName(e.target.value) })),
                            react_1.default.createElement("div", { className: 'form-group' },
                                react_1.default.createElement("label", null, "Hex Picker"),
                                react_1.default.createElement("div", { className: 'color-input-wrapper' },
                                    react_1.default.createElement("input", { type: 'color', className: 'color-picker-native', value: customColorVal, onChange: (e) => setCustomColorVal(e.target.value) }),
                                    react_1.default.createElement("input", { type: 'text', className: 'form-control', style: { width: '90px' }, value: customColorVal, onChange: (e) => setCustomColorVal(e.target.value) }),
                                    react_1.default.createElement("button", { className: 'btn-register', type: 'submit' }, "Register")))))))))));
};
exports.App = App;
exports.default = exports.App;
