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
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var LongHairShavedSides = /** @class */ (function (_super) {
    __extends(LongHairShavedSides, _super);
    function LongHairShavedSides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LongHairShavedSides.prototype.render = function () {
        var path1 = "".concat(this.props.uid, "-top-path1");
        var path2 = "".concat(this.props.uid, "-top-path2");
        var mask1 = "".concat(this.props.uid, "-top-mask1");
        var hairColorMask = "".concat(this.props.uid, "-Hair-Color-Mask");
        return (React.createElement("g", { id: "".concat(this.props.uid, "-Top"), strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M 180.83594,8.4902344 C 177.51793,8.5162594 169.1331,15.79733 154.35156,16.650391 137.45838,17.625317 141.08035,13.35016 123.10352,16.074219 105.12668,18.798277 107.11141,33.378559 95.380859,36.876953 86.085474,39.64911 85.377803,46.171968 87.619141,50.007812 77.477816,58.042115 70.777937,70.252768 70.216797,84.142578 L 69.511719,101.57812 C 71.240959,99.835666 73.47168,98.590187 76,98.166016 V 92 C 76,76.977889 81.941421,63.362596 91.570312,53.306641 113.1478,65.055236 139.94353,64.89954 171.95312,52.845703 181.86236,62.936387 188,76.736641 188,92 v 6.166016 c 1.43667,0.241027 2.78469,0.740024 4,1.443359 V 86 c 0,-14.067087 -6.3205,-26.644831 -16.27148,-35.076172 13.17786,-8.161212 21.65047,-23.048274 6.22265,-41.9609374 -0.27108,-0.3323098 -0.64123,-0.4763741 -1.11523,-0.4726562 z M 68.322266,131.01758 l -0.625,15.48633 c 0.756031,20.94774 2.102524,41.30317 5.091796,59.59375 C 82.231074,201.54874 92.817783,199 104,199 h 4 v -18.38867 c -17.237366,-8.18858 -29.628225,-24.9247 -31.695312,-44.73047 -3.290714,-0.46521 -6.115494,-2.29396 -7.982422,-4.86328 z M 192,134.36914 c -1.3033,0.75581 -2.75024,1.29197 -4.30469,1.51172 C 185.62823,155.68663 173.23736,172.42275 156,180.61133 V 199 h 4 c 29.59962,0 55.01612,17.86779 66.08203,43.40039 0.54479,-5.24854 -0.41803,-10.75582 -3.47265,-16.34961 C 210.75819,204.34829 192,180.65098 192,154.10938 Z', id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: "".concat(this.props.uid, "-Top/Long-Hair/ShavedSides"), mask: "url(#".concat(mask1, ")") },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: "".concat(this.props.uid, "-Hair"), strokeWidth: '1', fill: 'none', fillRule: 'evenodd', transform: 'translate(1, 0)' },
                        React.createElement("mask", { id: hairColorMask, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { id: "".concat(this.props.uid, "-Mask-Hair"), fill: '#944F23', xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { uid: this.props.uid })),
                    React.createElement("path", { d: 'm 113.97461,-10.648438 c 1.82009,12.1259255 -6.45505,21.513488 -16.730469,27.009766 -33.42771,12.865973 -61.217253,12.865973 -83.367188,0 -1.410392,-0.819238 -2.551103,-2.396423 -3.052734,-4.261719 -0.8399352,3.092803 0.407113,6.214398 2.408203,7.800782 C 4.9865756,29.450373 0,41.892615 0,55.5 v 6 C 0,45.958626 6.5054161,31.93613 16.941406,22.007812 38.014451,32.80222 63.920033,32.676969 94.658203,21.630859 105.32822,31.579609 112,45.760579 112,61.5 v -6 C 112,41.911436 107.02622,29.484214 98.800781,19.939453 111.26023,12.444293 116.48257,1.0460243 113.97461,-10.648438 Z M -7.6777344,95.017578 l -0.625,15.486332 c 0.756031,20.94774 2.1025249,41.30317 5.0917969,59.59375 C 6.2310745,165.54874 16.817783,163 28,163 h 4 V 144.61133 C 14.762634,136.42275 2.3717745,119.68663 0.3046875,99.880859 -2.9860265,99.415649 -5.8108064,97.586898 -7.6777344,95.017578 Z M 116,98.369141 c -1.3033,0.75581 -2.75024,1.291968 -4.30469,1.511718 C 109.62823,119.68663 97.23736,136.42275 80,144.61133 V 163 h 4 c 29.59962,0 55.01612,17.86779 66.08203,43.40039 0.54479,-5.24854 -0.41804,-10.75582 -3.47265,-16.34961 C 134.75818,168.34829 116,144.65098 116,118.10938 Z', id: "".concat(this.props.uid, "-Shadow"), fillOpacity: '0.24', fill: '#000000', fillRule: 'evenodd', transform: 'translate(77, 36)' }),
                    React.createElement(facialHair_1.default, { uid: this.props.uid }),
                    this.props.children))));
    };
    LongHairShavedSides.optionValue = 'LongHairShavedSides';
    return LongHairShavedSides;
}(React.Component));
exports.default = LongHairShavedSides;
