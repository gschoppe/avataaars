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
var Surprised = /** @class */ (function (_super) {
    __extends(Surprised, _super);
    function Surprised() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Surprised.prototype.render = function () {
        return (React.createElement("g", { id: "".concat(this.props.uid, "-Eyes/Surprised-\uD83D\uDE33"), transform: 'translate(0.000000, 8.000000)' },
            React.createElement("g", { id: "".concat(this.props.uid, "-Eye-Left") },
                React.createElement("circle", { id: "".concat(this.props.uid, "-Eyeball-Left"), cx: '30', cy: '22', r: '14', fill: '#FFFFFF' }),
                React.createElement("circle", { id: "".concat(this.props.uid, "-Pupil-Left"), fillOpacity: '0.699999988', cx: '30', cy: '22', r: '6', fill: '#000000' })),
            React.createElement("g", { id: "".concat(this.props.uid, "-Eye-Right") },
                React.createElement("circle", { id: "".concat(this.props.uid, "-Eyeball-Right"), cx: '82', cy: '22', r: '14', fill: '#FFFFFF' }),
                React.createElement("circle", { id: "".concat(this.props.uid, "-Pupil-Right"), fillOpacity: '0.699999988', cx: '82', cy: '22', r: '6', fill: '#000000' }))));
    };
    Surprised.optionValue = 'Surprised';
    return Surprised;
}(React.Component));
exports.default = Surprised;
