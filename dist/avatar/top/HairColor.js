"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHairColor = makeHairColor;
var React = require("react");
var options_1 = require("../../options");
var hairColorPalette = new Map();
function makeHairColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: "".concat(this.props.uid, "-HairColor/").concat(name), mask: "url(#".concat(this.props.uid, "-Hair-Color-Mask)"), fill: color },
                React.createElement("g", { transform: 'translate(0.000000, 0.000000) ', id: 'Color' },
                    React.createElement("rect", { x: '0', y: '0', width: '264', height: '280' }))));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    hairColorPalette.set(name, anyComponent);
    return anyComponent;
}
makeHairColor('Auburn', '#A55728');
makeHairColor('Black', '#2C1B18');
makeHairColor('Blonde', '#B58143');
makeHairColor('BlondeGolden', '#D6B370');
makeHairColor('Brown', '#724133');
makeHairColor('BrownDark', '#4A312C');
makeHairColor('PastelPink', '#F59797');
makeHairColor('Blue', '#000fdb');
makeHairColor('Platinum', '#ECDCBF');
makeHairColor('Red', '#C93305');
makeHairColor('SilverGray', '#E8E1E1');
var HairColor = /** @class */ (function (_super) {
    __extends(HairColor, _super);
    function HairColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HairColor.prototype.render = function () {
        var _this = this;
        return (React.createElement(options_1.Selector, { option: options_1.HairColorOption, defaultOption: 'BrownDark' }, Array.from(hairColorPalette.values()).map(function (ColorComponent, index) { return (React.createElement(ColorComponent, { key: index, uid: _this.props.uid })); })));
    };
    return HairColor;
}(React.Component));
exports.default = HairColor;
