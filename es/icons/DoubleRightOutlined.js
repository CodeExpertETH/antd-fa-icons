"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _faAngleDoubleLeft = require("@fortawesome/free-solid-svg-icons/faAngleDoubleLeft");
var _AntdIcon = _interopRequireDefault(require("./components/AntdIcon"));
const Icon = props => /*#__PURE__*/_react.default.createElement(_AntdIcon.default, (0, _extends2.default)({}, props, {
  icon: _faAngleDoubleLeft.faAngleDoubleLeft
}));
var _default = Icon;
exports.default = _default;