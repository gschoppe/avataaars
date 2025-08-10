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
var options_1 = require("../../../options");
function makeColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: "".concat(this.props.uid, "-Color/Hair/").concat(name), mask: "url(#".concat(this.props.uid, "-Facial-Hair-Mask)"), fill: color },
                React.createElement("g", { transform: 'translate(-32.000000, 0.000000)', id: "".concat(this.props.uid, "-Facial-Hair-Color") },
                    React.createElement("rect", { x: '0', y: '0', width: '264', height: '244' }))));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Auburn = makeColor('Auburn', '#A55728');
var Black = makeColor('Black', '#2C1B18');
var Blonde = makeColor('Blonde', '#B58143');
var BlondeGolden = makeColor('BlondeGolden', '#D6B370');
var Brown = makeColor('Brown', '#724133');
var BrownDark = makeColor('BrownDark', '#4A312C');
var Platinum = makeColor('Platinum', '#ECDCBF');
var Red = makeColor('Red', '#C93305');
var SilverGray = makeColor('SilverGray', '#E8E1E1');
var Colors = /** @class */ (function (_super) {
    __extends(Colors, _super);
    function Colors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colors.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.FacialHairColor, defaultOption: BrownDark },
            React.createElement(Auburn, { uid: this.props.uid }),
            React.createElement(Black, { uid: this.props.uid }),
            React.createElement(Blonde, { uid: this.props.uid }),
            React.createElement(BlondeGolden, { uid: this.props.uid }),
            React.createElement(Brown, { uid: this.props.uid }),
            React.createElement(BrownDark, { uid: this.props.uid }),
            React.createElement(Platinum, { uid: this.props.uid }),
            React.createElement(Red, { uid: this.props.uid }),
            React.createElement(SilverGray, { uid: this.props.uid })));
    };
    return Colors;
}(React.Component));
exports.default = Colors;
