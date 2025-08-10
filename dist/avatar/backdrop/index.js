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
var CircleBackdrop_1 = require("./CircleBackdrop");
var NoBackdrop_1 = require("./NoBackdrop");
var options_1 = require("../../options");
var Backdrop = /** @class */ (function (_super) {
    __extends(Backdrop, _super);
    function Backdrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Backdrop.prototype.render = function () {
        return (react_1.default.createElement(options_1.Selector, { defaultOption: CircleBackdrop_1.default, option: options_1.BackdropOption },
            react_1.default.createElement(NoBackdrop_1.default, { uid: this.props.uid }),
            react_1.default.createElement(CircleBackdrop_1.default, { uid: this.props.uid })));
    };
    return Backdrop;
}(react_1.default.Component));
exports.default = Backdrop;
