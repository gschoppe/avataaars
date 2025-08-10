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
var lodash_uniqueid_1 = require("lodash.uniqueid");
var backdrop_1 = require("./backdrop");
var accessories_1 = require("./top/accessories");
var clothes_1 = require("./clothes");
var face_1 = require("./face");
var Skin_1 = require("./Skin");
var top_1 = require("./top");
var Avatar = /** @class */ (function (_super) {
    __extends(Avatar, _super);
    function Avatar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            uid: "error",
        };
        return _this;
    }
    Avatar.prototype.componentDidMount = function () {
        var uid = (0, lodash_uniqueid_1.default)('avatar-');
        this.setState({ uid: uid });
    };
    Avatar.prototype.render = function () {
        return (react_1.default.createElement("svg", { "data-uid": this.state.uid, style: this.props.style, className: this.props.className, width: "264px", height: "280px", viewBox: "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
            react_1.default.createElement("desc", null, "Created with getavataaars.com"),
            react_1.default.createElement("defs", null,
                react_1.default.createElement("circle", { id: "".concat(this.state.uid, "-path-circle"), cx: "120", cy: "120", r: "120" }),
                react_1.default.createElement("path", { d: "M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z", id: "".concat(this.state.uid, "-path-hemicircle") }),
                react_1.default.createElement("path", { d: "M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z", id: "".concat(this.state.uid, "-path-skin") })),
            react_1.default.createElement("g", { id: "".concat(this.state.uid, "-Avataaar"), stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                react_1.default.createElement("g", { transform: "translate(-825.000000, -1100.000000)", id: "".concat(this.state.uid, "-Avataaar/Backdrop") },
                    react_1.default.createElement("g", { transform: "translate(825.000000, 1100.000000)" },
                        react_1.default.createElement(backdrop_1.default, { uid: this.state.uid }),
                        react_1.default.createElement("g", { id: "".concat(this.state.uid, "-Person"), strokeWidth: "1", fillRule: "evenodd", mask: "url(#".concat(this.state.uid, "-mask-hemicircle)") },
                            react_1.default.createElement("g", { id: "".concat(this.state.uid, "-Body"), transform: "translate(32.000000, 36.000000)" },
                                react_1.default.createElement("mask", { id: "".concat(this.state.uid, "-Skin-Color-Mask"), fill: "white" },
                                    react_1.default.createElement("use", { xlinkHref: "#".concat(this.state.uid, "-path-skin") })),
                                react_1.default.createElement("use", { fill: "#D0C6AC", xlinkHref: "#".concat(this.state.uid, "-path-skin") }),
                                react_1.default.createElement(Skin_1.default, { uid: this.state.uid }),
                                react_1.default.createElement("path", { d: "M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z", id: "".concat(this.state.uid, "-Neck-Shadow"), fillOpacity: "0.100000001", fill: "#000000", mask: "url(#".concat(this.state.uid, "-Skin-Color-Mask)") })),
                            react_1.default.createElement(clothes_1.default, { uid: this.state.uid }),
                            react_1.default.createElement(face_1.default, { uid: this.state.uid }),
                            react_1.default.createElement(top_1.default, { uid: this.state.uid },
                                react_1.default.createElement(accessories_1.default, { uid: this.state.uid }))))))));
    };
    return Avatar;
}(react_1.default.Component));
exports.default = Avatar;
