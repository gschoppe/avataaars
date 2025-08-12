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
exports.makeHatColor = makeHatColor;
var React = require("react");
var options_1 = require("../../options");
var hatColorPalette = new Map();
function makeHatColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: "".concat(this.props.uid, "-HatColor/").concat(name), mask: "url(#".concat(this.props.uid, "-Hat-Color-Mask)"), fillRule: 'evenodd', fill: color },
                React.createElement("rect", { id: "".concat(this.props.uid, "-\uD83D\uDD8DColor"), x: '0', y: '0', width: '264', height: '280' })));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    hatColorPalette.set(name, anyComponent);
    return anyComponent;
}
makeHatColor('Black', '#262E33');
makeHatColor('Blue01', '#65C9FF');
makeHatColor('Blue02', '#5199E4');
makeHatColor('Blue03', '#25557C');
makeHatColor('Gray01', '#E6E6E6');
makeHatColor('Gray02', '#929598');
makeHatColor('Heather', '#3C4F5C');
makeHatColor('PastelBlue', '#B1E2FF');
makeHatColor('PastelGreen', '#A7FFC4');
makeHatColor('PastelOrange', '#FFDEB5');
makeHatColor('PastelRed', '#FFAFB9');
makeHatColor('PastelYellow', '#FFFFB1');
makeHatColor('Pink', '#FF488E');
makeHatColor('Red', '#FF5C5C');
makeHatColor('White', '#FFFFFF');
var Colors = /** @class */ (function (_super) {
    __extends(Colors, _super);
    function Colors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colors.prototype.render = function () {
        var _this = this;
        return (React.createElement(options_1.Selector, { option: options_1.HatColorOption, defaultOption: this.props.defaultColor || 'Gray01' }, Array.from(hatColorPalette.values()).map(function (ColorComponent, index) { return (React.createElement(ColorComponent, { key: index, uid: _this.props.uid })); })));
    };
    return Colors;
}(React.Component));
exports.default = Colors;
