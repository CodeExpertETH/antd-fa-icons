"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactFontawesomeSvgIcon = require("react-fontawesome-svg-icon");
const Icon = props => {
  const {
    // affect outter <i>...</i>
    className,
    // affect inner <svg>...</svg>
    icon,
    spin,
    rotate,
    tabIndex,
    onClick,
    // other
    twoToneColor,
    ...restProps
  } = props;
  const classString = (0, _classnames.default)('anticon', {
    [`anticon-${icon.name}`]: Boolean(icon.name)
  }, className);
  const svgClassString = (0, _classnames.default)({
    'anticon-spin': !!spin || icon.name === 'loading'
  });
  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  const svgStyle = rotate ? {
    msTransform: `rotate(${rotate}deg)`,
    transform: `rotate(${rotate}deg)`
  } : undefined;
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesomeSvgIcon.FontAwesomeSvgIcon, {
    icon: icon,
    "data-icon": icon.name,
    className: svgClassString,
    style: svgStyle
  }));
};
Icon.displayName = 'AntdIcon';
var _default = Icon;
exports.default = _default;