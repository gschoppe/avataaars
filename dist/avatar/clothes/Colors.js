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
var React = require("react");
var options_1 = require("../../options");
function makeColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: "Color/Palette/".concat(name), mask: "url(#".concat(this.props.uid, "-Clothing-Color-Mask)"), fillRule: 'evenodd', fill: color },
                React.createElement("rect", { id: "".concat(this.props.uid, "-\uD83D\uDD8DColor"), x: '0', y: '0', width: '264', height: '110' })));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Black = makeColor('Black', '#262E33');
var Blue01 = makeColor('Blue01', '#65C9FF');
var Blue02 = makeColor('Blue02', '#5199E4');
var Blue03 = makeColor('Blue03', '#25557C');
var Gray01 = makeColor('Gray01', '#E6E6E6');
var Gray02 = makeColor('Gray02', '#929598');
var Heather = makeColor('Heather', '#3C4F5C');
var PastelBlue = makeColor('PastelBlue', '#B1E2FF');
var PastelGreen = makeColor('PastelGreen', '#A7FFC4');
var PastelOrange = makeColor('PastelOrange', '#FFDEB5');
var PastelRed = makeColor('PastelRed', '#FFAFB9');
var PastelYellow = makeColor('PastelYellow', '#FFFFB1');
var Pink = makeColor('Pink', '#FF488E');
var Red = makeColor('Red', '#FF5C5C');
var White = makeColor('White', '#FFFFFF');
var Colors = /** @class */ (function (_super) {
    __extends(Colors, _super);
    function Colors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colors.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.ClotheColorOption, defaultOption: Gray01 },
            React.createElement(Black, { uid: this.props.uid }),
            React.createElement(Blue01, { uid: this.props.uid }),
            React.createElement(Blue02, { uid: this.props.uid }),
            React.createElement(Blue03, { uid: this.props.uid }),
            React.createElement(Gray01, { uid: this.props.uid }),
            React.createElement(Gray02, { uid: this.props.uid }),
            React.createElement(Heather, { uid: this.props.uid }),
            React.createElement(PastelBlue, { uid: this.props.uid }),
            React.createElement(PastelGreen, { uid: this.props.uid }),
            React.createElement(PastelOrange, { uid: this.props.uid }),
            React.createElement(PastelRed, { uid: this.props.uid }),
            React.createElement(PastelYellow, { uid: this.props.uid }),
            React.createElement(Pink, { uid: this.props.uid }),
            React.createElement(Red, { uid: this.props.uid }),
            React.createElement(White, { uid: this.props.uid })));
    };
    return Colors;
}(React.Component));
exports.default = Colors;
