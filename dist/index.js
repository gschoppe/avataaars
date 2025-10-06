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
exports.Piece = exports.PALETTES = exports.allOptions = exports.OptionsContext = exports.OptionContext = exports.Option = exports.Avatar = void 0;
exports.addPaletteColor = addPaletteColor;
var React = require("react");
var avatar_1 = require("./avatar");
var options_1 = require("./options");
var BackdropColor_1 = require("./avatar/backdrop/BackdropColor");
var Skin_1 = require("./avatar/Skin");
var HairColor_1 = require("./avatar/top/HairColor");
var FacialHairColor_1 = require("./avatar/top/facialHair/FacialHairColor");
var ClotheColor_1 = require("./avatar/clothes/ClotheColor");
var HatColor_1 = require("./avatar/top/HatColor");
var avatar_2 = require("./avatar");
Object.defineProperty(exports, "Avatar", { enumerable: true, get: function () { return avatar_2.default; } });
var options_2 = require("./options");
Object.defineProperty(exports, "Option", { enumerable: true, get: function () { return options_2.Option; } });
Object.defineProperty(exports, "OptionContext", { enumerable: true, get: function () { return options_2.OptionContext; } });
Object.defineProperty(exports, "OptionsContext", { enumerable: true, get: function () { return options_2.OptionsContext; } });
Object.defineProperty(exports, "allOptions", { enumerable: true, get: function () { return options_2.allOptions; } });
var piece_1 = require("./avatar/piece");
exports.PALETTES = {
    BACKDROP: "BACKDROP",
    SKIN: "SKIN",
    HAIR: "HAIR",
    FACIAL_HAIR: "FACIAL_HAIR",
    CLOTHES: "CLOTHES",
    HAT: "HAT"
};
function addPaletteColor(palette, name, color) {
    switch (palette) {
        case exports.PALETTES.BACKDROP:
            return (0, BackdropColor_1.makeBackdropColor)(name, color);
        case exports.PALETTES.SKIN:
            return (0, Skin_1.makeSkinColor)(name, color);
        case exports.PALETTES.HAIR:
            return (0, HairColor_1.makeHairColor)(name, color);
        case exports.PALETTES.FACIAL_HAIR:
            return (0, FacialHairColor_1.makeFacialHairColor)(name, color);
        case exports.PALETTES.CLOTHES:
            return (0, ClotheColor_1.makeClotheColor)(name, color);
        case exports.PALETTES.HAT:
            return (0, HatColor_1.makeHatColor)(name, color);
        default:
            throw new Error("Unknown palette: ".concat(palette));
    }
}
var AvatarComponent = /** @class */ (function (_super) {
    __extends(AvatarComponent, _super);
    function AvatarComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.optionContext = new options_1.OptionContext(options_1.allOptions);
        _this.updateOptionContext(_this.props);
        return _this;
    }
    AvatarComponent.prototype.componentDidMount = function () {
        this.updateOptionContext(this.props);
    };
    AvatarComponent.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps !== this.props) {
            this.updateOptionContext(this.props);
        }
    };
    AvatarComponent.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className;
        return (React.createElement(options_1.OptionsContext.Provider, { value: this.optionContext },
            React.createElement(avatar_1.default, { style: style, className: className })));
    };
    AvatarComponent.prototype.updateOptionContext = function (props) {
        var data = {};
        for (var _i = 0, allOptions_1 = options_1.allOptions; _i < allOptions_1.length; _i++) {
            var option = allOptions_1[_i];
            var value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        this.optionContext.setData(data);
    };
    return AvatarComponent;
}(React.Component));
exports.default = AvatarComponent;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContext = new options_1.OptionContext(options_1.allOptions);
        return _this;
    }
    Piece.prototype.componentDidMount = function () {
        this.updateOptionContext(this.props);
    };
    Piece.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        this.updateOptionContext(nextProps);
    };
    Piece.prototype.render = function () {
        var _a = this.props, style = _a.style, pieceType = _a.pieceType, pieceSize = _a.pieceSize, viewBox = _a.viewBox;
        return (React.createElement(options_1.OptionsContext.Provider, { value: this.optionContext },
            React.createElement(piece_1.default, { style: style, pieceType: pieceType, pieceSize: pieceSize, viewBox: viewBox })));
    };
    Piece.prototype.updateOptionContext = function (props) {
        var data = {};
        for (var _i = 0, allOptions_2 = options_1.allOptions; _i < allOptions_2.length; _i++) {
            var option = allOptions_2[_i];
            var value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        this.optionContext.setData(data);
    };
    return Piece;
}(React.Component));
exports.Piece = Piece;
