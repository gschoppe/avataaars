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
exports.makeFacialHairColor = makeFacialHairColor;
var React = require("react");
var options_1 = require("../../../options");
var facialHairColorPalette = new Map();
function makeFacialHairColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: "".concat(this.props.uid, "-FacialHairColor/").concat(name), mask: "url(#".concat(this.props.uid, "-Facial-Hair-Mask)"), fill: color },
                React.createElement("g", { transform: 'translate(-32.000000, 0.000000)', id: "".concat(this.props.uid, "-Facial-Hair-Color") },
                    React.createElement("rect", { x: '0', y: '0', width: '264', height: '244' }))));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    facialHairColorPalette.set(name, anyComponent);
    return anyComponent;
}
makeFacialHairColor('Auburn', '#A55728');
makeFacialHairColor('Black', '#2C1B18');
makeFacialHairColor('Blonde', '#B58143');
makeFacialHairColor('BlondeGolden', '#D6B370');
makeFacialHairColor('Brown', '#724133');
makeFacialHairColor('BrownDark', '#4A312C');
makeFacialHairColor('Platinum', '#ECDCBF');
makeFacialHairColor('Red', '#C93305');
makeFacialHairColor('SilverGray', '#E8E1E1');
var FacialHairColor = /** @class */ (function (_super) {
    __extends(FacialHairColor, _super);
    function FacialHairColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacialHairColor.prototype.render = function () {
        var _this = this;
        return (React.createElement(options_1.Selector, { option: options_1.FacialHairColorOption, defaultOption: 'BrownDark' }, Array.from(facialHairColorPalette.values()).map(function (ColorComponent, index) { return (React.createElement(ColorComponent, { key: index, uid: _this.props.uid })); })));
    };
    return FacialHairColor;
}(React.Component));
exports.default = FacialHairColor;
