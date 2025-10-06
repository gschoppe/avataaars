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
var BackdropColor_1 = require("./BackdropColor");
var DiamondBackdrop = /** @class */ (function (_super) {
    __extends(DiamondBackdrop, _super);
    function DiamondBackdrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiamondBackdrop.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("g", { id: "".concat(this.props.uid, "-Diamond"), strokeWidth: "1", fillRule: "evenodd" },
                React.createElement("mask", { id: "".concat(this.props.uid, "-Backdrop-Color-Mask"), fill: "white" },
                    React.createElement("path", { d: "M12,160 L132,40 L252,160 L132,280 Z" })),
                React.createElement("path", { d: "M12,160 L132,40 L252,160 L132,280 Z", fill: "#E6E6E6" }),
                React.createElement(BackdropColor_1.default, { uid: this.props.uid, defaultColor: "Blue01" })),
            React.createElement("mask", { id: "".concat(this.props.uid, "-Backdrop-Mask"), fill: "white" },
                React.createElement("path", { d: "M-100,-100 V160, H12 L132,280 L252,160 H364 V-100 H-100 Z" }))));
    };
    DiamondBackdrop.optionValue = 'Diamond';
    return DiamondBackdrop;
}(React.Component));
exports.default = DiamondBackdrop;
