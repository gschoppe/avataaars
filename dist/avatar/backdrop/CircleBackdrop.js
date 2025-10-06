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
var BackdropColor_1 = require("./BackdropColor");
var CircleBackdrop = /** @class */ (function (_super) {
    __extends(CircleBackdrop, _super);
    function CircleBackdrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleBackdrop.prototype.render = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("g", { id: "".concat(this.props.uid, "-Circle"), strokeWidth: "1", fillRule: "evenodd", transform: "translate(12.000000, 40.000000)" },
                react_1.default.createElement("mask", { id: "".concat(this.props.uid, "-Backdrop-Color-Mask"), fill: "white" },
                    react_1.default.createElement("circle", { cx: "120", cy: "120", r: "120" })),
                react_1.default.createElement("circle", { cx: "120", cy: "120", r: "120", fill: "#E6E6E6" }),
                react_1.default.createElement(BackdropColor_1.default, { uid: this.props.uid, defaultColor: "Blue01" })),
            react_1.default.createElement("mask", { id: "".concat(this.props.uid, "-Backdrop-Mask"), fill: "white" },
                react_1.default.createElement("path", { d: "M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z" }))));
    };
    CircleBackdrop.optionValue = 'Circle';
    return CircleBackdrop;
}(react_1.default.Component));
exports.default = CircleBackdrop;
