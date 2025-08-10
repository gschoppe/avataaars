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
var NoBackdrop = /** @class */ (function (_super) {
    __extends(NoBackdrop, _super);
    function NoBackdrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoBackdrop.prototype.render = function () {
        return null;
    };
    NoBackdrop.optionValue = 'NoBackdrop';
    return NoBackdrop;
}(react_1.default.Component));
exports.default = NoBackdrop;
