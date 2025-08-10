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
                    react_1.default.createElement("use", { xlinkHref: "#".concat(this.props.uid, "-path-circle") })),
                react_1.default.createElement("use", { id: "".concat(this.props.uid, "-Circle-Background"), fill: "#E6E6E6", xlinkHref: "#".concat(this.props.uid, "-path-circle") }),
                react_1.default.createElement(BackdropColor_1.default, { uid: this.props.uid, defaultColor: "Blue01" })),
            react_1.default.createElement("mask", { id: "".concat(this.props.uid, "-mask-hemicircle"), fill: "white" },
                react_1.default.createElement("use", { xlinkHref: "#".concat(this.props.uid, "-path-hemicircle") }))));
    };
    CircleBackdrop.optionValue = 'Circle';
    return CircleBackdrop;
}(react_1.default.Component));
exports.default = CircleBackdrop;
