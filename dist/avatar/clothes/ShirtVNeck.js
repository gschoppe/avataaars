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
var ClotheColor_1 = require("./ClotheColor");
var ShirtVNeck = /** @class */ (function (_super) {
    __extends(ShirtVNeck, _super);
    function ShirtVNeck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShirtVNeck.prototype.render = function () {
        var path1 = "".concat(this.props.uid, "-Clothing-path1");
        var clothingColorMask = "".concat(this.props.uid, "-Clothing-Color-Mask");
        return (React.createElement("g", { id: "".concat(this.props.uid, "-Clothing/Shirt-V-Neck"), transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z', id: path1 })),
            React.createElement("mask", { id: clothingColorMask, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: "".concat(this.props.uid, "-Clothes"), fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(ClotheColor_1.default, { uid: this.props.uid })));
    };
    ShirtVNeck.optionValue = 'ShirtVNeck';
    return ShirtVNeck;
}(React.Component));
exports.default = ShirtVNeck;
