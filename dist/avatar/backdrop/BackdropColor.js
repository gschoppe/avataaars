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
var options_1 = require("../../options");
function makeBackdropColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (react_1.default.createElement("g", { id: "".concat(this.props.uid, "-Color/Backdrop/").concat(name), mask: "url(#".concat(this.props.uid, "-Backdrop-Color-Mask)"), fill: color },
                react_1.default.createElement("rect", { id: "".concat(this.props.uid, "-\uD83D\uDD8DColor"), x: "0", y: "0", width: "240", height: "240" })));
        };
        return ColorComponent;
    }(react_1.default.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Black = makeBackdropColor('Black', '#262E33');
var Blue01 = makeBackdropColor('Blue01', '#65C9FF');
var Blue02 = makeBackdropColor('Blue02', '#5199E4');
var Blue03 = makeBackdropColor('Blue03', '#25557C');
var Gray01 = makeBackdropColor('Gray01', '#E6E6E6');
var Gray02 = makeBackdropColor('Gray02', '#929598');
var Heather = makeBackdropColor('Heather', '#3C4F5C');
var PastelBlue = makeBackdropColor('PastelBlue', '#B1E2FF');
var PastelGreen = makeBackdropColor('PastelGreen', '#A7FFC4');
var PastelOrange = makeBackdropColor('PastelOrange', '#FFDEB5');
var PastelRed = makeBackdropColor('PastelRed', '#FFAFB9');
var PastelYellow = makeBackdropColor('PastelYellow', '#FFFFB1');
var Pink = makeBackdropColor('Pink', '#FF488E');
var Red = makeBackdropColor('Red', '#FF5C5C');
var White = makeBackdropColor('White', '#FFFFFF');
var Player1 = makeBackdropColor('Player1', '#FF0000');
var Player2 = makeBackdropColor('Player2', '#0042FF');
var Player3 = makeBackdropColor('Player3', '#EBE129');
var Player4 = makeBackdropColor('Player4', '#540081');
var Player5 = makeBackdropColor('Player5', '#168000');
var Player6 = makeBackdropColor('Player6', '#FE8A0E');
var Player7 = makeBackdropColor('Player7', '#E55BB0');
var Player8 = makeBackdropColor('Player8', '#4E2A04');
var Player9 = makeBackdropColor('Player9', '#400000');
var Player10 = makeBackdropColor('Player10', '#1ca7ea');
var Colors = /** @class */ (function (_super) {
    __extends(Colors, _super);
    function Colors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colors.prototype.render = function () {
        return (react_1.default.createElement(options_1.Selector, { option: options_1.BackdropColorOption, defaultOption: this.props.defaultColor || Blue01 },
            react_1.default.createElement(Black, { uid: this.props.uid }),
            react_1.default.createElement(Blue01, { uid: this.props.uid }),
            react_1.default.createElement(Blue02, { uid: this.props.uid }),
            react_1.default.createElement(Blue03, { uid: this.props.uid }),
            react_1.default.createElement(Gray01, { uid: this.props.uid }),
            react_1.default.createElement(Gray02, { uid: this.props.uid }),
            react_1.default.createElement(Heather, { uid: this.props.uid }),
            react_1.default.createElement(PastelBlue, { uid: this.props.uid }),
            react_1.default.createElement(PastelGreen, { uid: this.props.uid }),
            react_1.default.createElement(PastelOrange, { uid: this.props.uid }),
            react_1.default.createElement(PastelRed, { uid: this.props.uid }),
            react_1.default.createElement(PastelYellow, { uid: this.props.uid }),
            react_1.default.createElement(Pink, { uid: this.props.uid }),
            react_1.default.createElement(Red, { uid: this.props.uid }),
            react_1.default.createElement(White, { uid: this.props.uid }),
            react_1.default.createElement(Player1, { uid: this.props.uid }),
            react_1.default.createElement(Player2, { uid: this.props.uid }),
            react_1.default.createElement(Player3, { uid: this.props.uid }),
            react_1.default.createElement(Player4, { uid: this.props.uid }),
            react_1.default.createElement(Player5, { uid: this.props.uid }),
            react_1.default.createElement(Player6, { uid: this.props.uid }),
            react_1.default.createElement(Player7, { uid: this.props.uid }),
            react_1.default.createElement(Player8, { uid: this.props.uid }),
            react_1.default.createElement(Player9, { uid: this.props.uid }),
            react_1.default.createElement(Player10, { uid: this.props.uid })));
    };
    return Colors;
}(react_1.default.Component));
exports.default = Colors;
