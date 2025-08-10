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
var react_1 = require("react");
var options_1 = require("../options");
function makeSkinColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (react_1.default.createElement("g", { id: "Skin/".concat(name), mask: "url(#".concat(this.props.uid, "-Skin-Color-Mask)"), fill: color },
                react_1.default.createElement("g", { transform: "translate(0.000000, 0.000000)", id: "Color" },
                    react_1.default.createElement("rect", { x: "0", y: "0", width: "264", height: "280" }))));
        };
        return ColorComponent;
    }(react_1.default.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Tanned = makeSkinColor('Tanned', '#FD9841');
var Yellow = makeSkinColor('Yellow', '#F8D25C');
var Pale = makeSkinColor('Pale', '#FFDBB4');
var Light = makeSkinColor('Light', '#EDB98A');
var Brown = makeSkinColor('Brown', '#D08B5B');
var DarkBrown = makeSkinColor('DarkBrown', '#AE5D29');
var Black = makeSkinColor('Black', '#614335');
var Skin = /** @class */ (function (_super) {
    __extends(Skin, _super);
    function Skin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skin.prototype.render = function () {
        return (react_1.default.createElement(options_1.Selector, { option: options_1.SkinOption, defaultOption: Light },
            react_1.default.createElement(Tanned, { uid: this.props.uid }),
            react_1.default.createElement(Yellow, { uid: this.props.uid }),
            react_1.default.createElement(Pale, { uid: this.props.uid }),
            react_1.default.createElement(Light, { uid: this.props.uid }),
            react_1.default.createElement(Brown, { uid: this.props.uid }),
            react_1.default.createElement(DarkBrown, { uid: this.props.uid }),
            react_1.default.createElement(Black, { uid: this.props.uid })));
    };
    return Skin;
}(react_1.default.Component));
exports.default = Skin;
