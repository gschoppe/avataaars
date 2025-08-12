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
exports.makeBackdropColor = makeBackdropColor;
var react_1 = require("react");
var options_1 = require("../../options");
var backdropColorPalette = new Map();
function makeBackdropColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (react_1.default.createElement("g", { id: "".concat(this.props.uid, "-BackdropColor/").concat(name), mask: "url(#".concat(this.props.uid, "-Backdrop-Color-Mask)"), fill: color },
                react_1.default.createElement("rect", { id: "".concat(this.props.uid, "-\uD83D\uDD8DColor"), x: "0", y: "0", width: "240", height: "240" })));
        };
        return ColorComponent;
    }(react_1.default.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    backdropColorPalette.set(name, anyComponent);
    return anyComponent;
}
makeBackdropColor('Black', '#262E33');
makeBackdropColor('Blue01', '#65C9FF');
makeBackdropColor('Blue02', '#5199E4');
makeBackdropColor('Blue03', '#25557C');
makeBackdropColor('Gray01', '#E6E6E6');
makeBackdropColor('Gray02', '#929598');
makeBackdropColor('Heather', '#3C4F5C');
makeBackdropColor('PastelBlue', '#B1E2FF');
makeBackdropColor('PastelGreen', '#A7FFC4');
makeBackdropColor('PastelOrange', '#FFDEB5');
makeBackdropColor('PastelRed', '#FFAFB9');
makeBackdropColor('PastelYellow', '#FFFFB1');
makeBackdropColor('Pink', '#FF488E');
makeBackdropColor('Red', '#FF5C5C');
makeBackdropColor('White', '#FFFFFF');
var BackdropColor = /** @class */ (function (_super) {
    __extends(BackdropColor, _super);
    function BackdropColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackdropColor.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(options_1.Selector, { option: options_1.BackdropColorOption, defaultOption: this.props.defaultColor || 'Blue01' }, Array.from(backdropColorPalette.values()).map(function (ColorComponent, index) {
            return react_1.default.createElement(ColorComponent, { key: index, uid: _this.props.uid });
        })));
    };
    return BackdropColor;
}(react_1.default.Component));
exports.default = BackdropColor;
