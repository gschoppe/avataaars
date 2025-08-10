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
var HatColor_1 = require("./HatColor");
var Hat = /** @class */ (function (_super) {
    __extends(Hat, _super);
    function Hat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hat.prototype.render = function () {
        var path1 = "".concat(this.props.uid, "-top-path1");
        var path2 = "".concat(this.props.uid, "-top-path2");
        var mask1 = "".concat(this.props.uid, "-top-mask1");
        var hatColorMask = "".concat(this.props.uid, "-Hat-Color-Mask");
        var filter1 = "".concat(this.props.uid, "-top-filter1");
        return (React.createElement("g", { id: "".concat(this.props.uid, "-Top"), strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M 123.18164 2 C 104.3902 2 88.132546 15.079828 84.109375 33.435547 L 83.839844 34.662109 C 60.802486 35.407674 14.023473 55.888236 10 87.5 C 10 109.87092 37.124041 129.24452 76.701172 138.75 C 76.610816 138.14872 76.526197 137.54572 76.451172 136.93945 C 76.367027 136.25721 76.264448 135.58024 76.205078 134.89062 C 70.434411 134.02686 66.01078 129.05368 66 123.04492 L 66 110.00195 L 66 110 C 66 109.26475 66.068733 108.54639 66.195312 107.84766 C 67.100657 102.90654 71.032048 99.02259 75.998047 98.189453 L 75.998047 98.166016 L 76 98.166016 L 76 92 C 76 91.872094 76.018675 91.748798 76.019531 91.621094 C 76.032615 89.783637 76.118733 87.96314 76.304688 86.171875 C 76.359183 85.644945 76.473959 85.137724 76.542969 84.615234 C 76.72568 83.235896 76.910184 81.857452 77.191406 80.511719 C 77.32169 79.887116 77.513158 79.286697 77.664062 78.669922 C 77.964204 77.44525 78.255521 76.216951 78.634766 75.025391 C 78.823678 74.431047 79.067359 73.862901 79.275391 73.277344 C 79.694428 72.099353 80.111244 70.919484 80.605469 69.779297 C 80.662455 69.647691 80.733046 69.523658 80.791016 69.392578 C 85.262686 61.629798 108.31009 57.546747 131.53711 57.466797 C 154.8292 57.386625 178.27782 61.330719 183.31641 69.615234 C 183.34711 69.685608 183.38552 69.751746 183.41602 69.822266 C 183.9806 71.128111 184.46193 72.476894 184.92773 73.832031 C 185.06899 74.243483 185.24312 74.638968 185.375 75.054688 C 185.82957 76.485792 186.19309 77.955191 186.5332 79.433594 C 186.61625 79.795222 186.73259 80.143548 186.80859 80.507812 C 187.15543 82.166889 187.40707 83.860873 187.60352 85.570312 C 187.62652 85.771344 187.67441 85.964342 187.69531 86.166016 C 187.89551 88.091538 187.99805 90.045031 187.99805 92.023438 L 187.99805 98.189453 C 193.67348 99.141609 197.99805 104.07745 197.99805 110.02344 L 197.99805 123.02344 C 197.99805 129.04206 193.56677 134.0258 187.78906 134.89062 C 187.72035 135.68872 187.60574 136.47354 187.50391 137.26172 C 187.43941 137.75917 187.37223 138.25551 187.29883 138.75 C 226.87596 129.24452 254 109.87092 254 87.5 C 253.98948 64.508795 181.2079 34.878453 181.20898 34.884766 L 180.89062 33.435547 C 176.86747 15.079828 160.6098 2 141.81836 2 L 123.18164 2 z', id: path2 }),
                React.createElement("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: "".concat(this.props.uid, "-Top/Accesories/Hat"), mask: "url(#".concat(mask1, ")") },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("mask", { id: hatColorMask, fill: 'white' },
                        React.createElement("use", { xlinkHref: '#' + path2 })),
                    React.createElement("use", { id: "".concat(this.props.uid, "-Hat-Mask"), stroke: 'none', fill: '#3B6BAD', fillRule: 'evenodd', xlinkHref: '#' + path2 }),
                    React.createElement(HatColor_1.default, { uid: this.props.uid, defaultColor: 'Blue03' }),
                    React.createElement("path", { d: 'M 132 57 A 62 25 0 0 0 106.9082 59.173828 C 114.48838 58.077019 122.99247 57.496208 131.53711 57.466797 C 140.23714 57.436851 148.95625 57.970668 156.73242 59.080078 A 62 25 0 0 0 132 57 z M 179.30859 65.84375 C 181.08496 66.984748 182.47671 68.234602 183.31641 69.615234 C 183.34711 69.685608 183.38552 69.751746 183.41602 69.822266 C 183.9806 71.128111 184.46193 72.476894 184.92773 73.832031 C 185.06899 74.243483 185.24312 74.638968 185.375 75.054688 C 185.82957 76.485792 186.19309 77.955191 186.5332 79.433594 C 186.61625 79.795222 186.73259 80.143548 186.80859 80.507812 C 187.15543 82.166889 187.40707 83.860873 187.60352 85.570312 C 187.62652 85.771344 187.67441 85.964342 187.69531 86.166016 C 187.89551 88.091538 187.99805 90.045031 187.99805 92.023438 L 187.99805 92.615234 A 62 25 0 0 0 194 82 A 62 25 0 0 0 179.30859 65.84375 z M 83.765625 66.341797 A 62 25 0 0 0 70 82 A 62 25 0 0 0 76 92.613281 L 76 92 C 76 91.872094 76.018675 91.748798 76.019531 91.621094 C 76.032615 89.783637 76.118733 87.96314 76.304688 86.171875 C 76.359183 85.644945 76.473959 85.137724 76.542969 84.615234 C 76.72568 83.235896 76.910184 81.857452 77.191406 80.511719 C 77.32169 79.887116 77.513158 79.286697 77.664062 78.669922 C 77.964204 77.44525 78.255521 76.216951 78.634766 75.025391 C 78.823678 74.431047 79.067359 73.862901 79.275391 73.277344 C 79.694428 72.099353 80.111244 70.919484 80.605469 69.779297 C 80.662455 69.647691 80.733046 69.523658 80.791016 69.392578 C 81.420305 68.300137 82.451844 67.287587 83.765625 66.341797 z', id: "".concat(this.props.uid, "-Hat-Shadows"), stroke: 'none', fillOpacity: '0.16', fill: '#000000', fillRule: 'evenodd', opacity: '0.899999976', mask: "url(#".concat(hatColorMask, ")") }),
                    this.props.children))));
    };
    Hat.optionValue = 'Hat';
    return Hat;
}(React.Component));
exports.default = Hat;
