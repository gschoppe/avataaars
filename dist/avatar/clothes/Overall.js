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
var Colors_1 = require("./Colors");
var Overall = /** @class */ (function (_super) {
    __extends(Overall, _super);
    function Overall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Overall.prototype.render = function () {
        var path1 = "".concat(this.props.uid, "-Clothing-path1");
        var clothingColorMask = "".concat(this.props.uid, "-Clothing-Color-Mask");
        return (React.createElement("g", { id: "".concat(this.props.uid, "-Clothing/Overall"), transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z', id: path1 })),
            React.createElement("mask", { id: clothingColorMask, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: "".concat(this.props.uid, "-Overall"), fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { uid: this.props.uid }),
            React.createElement("circle", { id: "".concat(this.props.uid, "-ButtonLeft"), fill: '#F4F4F4', fillRule: 'evenodd', cx: '81', cy: '83', r: '5' }),
            React.createElement("circle", { id: "".concat(this.props.uid, "-ButtonRight"), fill: '#F4F4F4', fillRule: 'evenodd', cx: '183', cy: '83', r: '5' })));
    };
    Overall.optionValue = 'Overall';
    return Overall;
}(React.Component));
exports.default = Overall;
