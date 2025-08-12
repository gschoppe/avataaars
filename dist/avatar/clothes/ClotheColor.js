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
exports.makeClotheColor = makeClotheColor;
var React = require("react");
var options_1 = require("../../options");
var clotheColorPalette = new Map();
function makeClotheColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: "".concat(this.props.uid, "-ClotheColor/").concat(name), mask: "url(#".concat(this.props.uid, "-Clothing-Color-Mask)"), fillRule: 'evenodd', fill: color },
                React.createElement("rect", { id: "".concat(this.props.uid, "-\uD83D\uDD8DColor"), x: '0', y: '0', width: '264', height: '110' })));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    clotheColorPalette.set(name, anyComponent);
    return anyComponent;
}
makeClotheColor('Black', '#262E33');
makeClotheColor('Blue01', '#65C9FF');
makeClotheColor('Blue02', '#5199E4');
makeClotheColor('Blue03', '#25557C');
makeClotheColor('Gray01', '#E6E6E6');
makeClotheColor('Gray02', '#929598');
makeClotheColor('Heather', '#3C4F5C');
makeClotheColor('PastelBlue', '#B1E2FF');
makeClotheColor('PastelGreen', '#A7FFC4');
makeClotheColor('PastelOrange', '#FFDEB5');
makeClotheColor('PastelRed', '#FFAFB9');
makeClotheColor('PastelYellow', '#FFFFB1');
makeClotheColor('Pink', '#FF488E');
makeClotheColor('Red', '#FF5C5C');
makeClotheColor('White', '#FFFFFF');
var ClotheColor = /** @class */ (function (_super) {
    __extends(ClotheColor, _super);
    function ClotheColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClotheColor.prototype.render = function () {
        var _this = this;
        return (React.createElement(options_1.Selector, { option: options_1.ClotheColorOption, defaultOption: 'Gray01' }, Array.from(clotheColorPalette.values()).map(function (ColorComponent, index) { return (React.createElement(ColorComponent, { key: index, uid: _this.props.uid })); })));
    };
    return ClotheColor;
}(React.Component));
exports.default = ClotheColor;
