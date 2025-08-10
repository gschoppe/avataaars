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
var Squint = /** @class */ (function (_super) {
    __extends(Squint, _super);
    function Squint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Squint.prototype.render = function () {
        var path1 = "".concat(this.props.uid, "-Eyes-path1");
        var path2 = "".concat(this.props.uid, "-Eyes-path2");
        var mask1 = "".concat(this.props.uid, "-Eyes-mask1");
        var mask2 = "".concat(this.props.uid, "-Eyes-mask2");
        return (React.createElement("g", { id: "".concat(this.props.uid, "-Eyes/Squint-\uD83D\uDE0A"), transform: 'translate(0.000000, 8.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path1 }),
                React.createElement("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path2 })),
            React.createElement("g", { id: "".concat(this.props.uid, "-Eye-Left"), transform: 'translate(16.000000, 13.000000)' },
                React.createElement("mask", { id: mask1, fill: 'white' },
                    React.createElement("use", { xlinkHref: '#' + path1 })),
                React.createElement("use", { id: "".concat(this.props.uid, "-Eyeball-Left"), fill: '#FFFFFF', xlinkHref: '#' + path1 }),
                React.createElement("circle", { id: "".concat(this.props.uid, "-Pupil-Left"), fillOpacity: '0.699999988', fill: '#000000', mask: "url(#".concat(mask1, ")"), cx: '14', cy: '10', r: '6' })),
            React.createElement("g", { id: "".concat(this.props.uid, "-Eye-Right"), transform: 'translate(68.000000, 13.000000)' },
                React.createElement("mask", { id: mask2, fill: 'white' },
                    React.createElement("use", { xlinkHref: '#' + path2 })),
                React.createElement("use", { id: "".concat(this.props.uid, "-Eyeball-Right"), fill: '#FFFFFF', xlinkHref: '#' + path2 }),
                React.createElement("circle", { id: "".concat(this.props.uid, "-Pupil-Right"), fillOpacity: '0.699999988', fill: '#000000', mask: "url(#".concat(mask2, ")"), cx: '14', cy: '10', r: '6' }))));
    };
    Squint.optionValue = 'Squint';
    return Squint;
}(React.Component));
exports.default = Squint;
