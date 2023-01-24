"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactFontawesomeSvgIcon = require("react-fontawesome-svg-icon");
var _excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
var Icon = function Icon(props) {
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var classString = (0, _classnames["default"])('anticon', (0, _defineProperty2["default"])({}, "anticon-".concat(icon.name), Boolean(icon.name)), className);
  var svgClassString = (0, _classnames["default"])({
    'anticon-spin': !!spin || icon.name === 'loading'
  });
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  return /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/_react["default"].createElement(_reactFontawesomeSvgIcon.FontAwesomeSvgIcon, {
    icon: icon,
    className: svgClassString,
    style: svgStyle
  }));
};
Icon.displayName = 'AntdIcon';
var _default = Icon;
exports["default"] = _default;
module.exports = exports.default;