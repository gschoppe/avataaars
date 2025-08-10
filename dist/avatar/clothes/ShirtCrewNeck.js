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
var ShirtCrewNeck = /** @class */ (function (_super) {
    __extends(ShirtCrewNeck, _super);
    function ShirtCrewNeck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShirtCrewNeck.prototype.render = function () {
        var path1 = "".concat(this.props.uid, "-Clothing-path1");
        var clothingColorMask = "".concat(this.props.uid, "-Clothing-Color-Mask");
        return (React.createElement("g", { id: "".concat(this.props.uid, "-Clothing/Shirt-Crew-Neck"), transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z', id: path1 })),
            React.createElement("mask", { id: clothingColorMask, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: "".concat(this.props.uid, "-Clothes"), fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { uid: this.props.uid }),
            React.createElement("g", { id: "".concat(this.props.uid, "-Shadowy"), opacity: '0.599999964', strokeWidth: '1', fillRule: 'evenodd', mask: "url(#".concat(clothingColorMask, ")"), fillOpacity: '0.16', fill: '#000000' },
                React.createElement("g", { transform: 'translate(92.000000, 4.000000)', id: "".concat(this.props.uid, "-Hola-\uD83D\uDC4B\uD83C\uDFFC") },
                    React.createElement("ellipse", { cx: '40.5', cy: '27.8476251', rx: '39.6351047', ry: '26.9138272' })))));
    };
    ShirtCrewNeck.optionValue = 'ShirtCrewNeck';
    return ShirtCrewNeck;
}(React.Component));
exports.default = ShirtCrewNeck;
