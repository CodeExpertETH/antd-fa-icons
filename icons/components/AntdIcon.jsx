import React from 'react';
import classNames from 'classnames';

import { FontAwesomeSvgIcon as Fa } from "react-fontawesome-svg-icon";


const Icon = (props) => {
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

  const classString = classNames(
    'anticon',
    { [`anticon-${icon.name}`]: Boolean(icon.name) },
    className,
  );

  const svgClassString = classNames({
    'anticon-spin': !!spin || icon.name === 'loading',
  });

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  const svgStyle = rotate
    ? {
      msTransform: `rotate(${rotate}deg)`,
      transform: `rotate(${rotate}deg)`,
    }
    : undefined;


  return (
    <span
      role="img"
      aria-label={icon.name}
      {...restProps}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
    >
       <Fa icon={icon}  data-icon={icon.name} className={svgClassString} style={svgStyle} />
    </span>
  );
};

Icon.displayName = 'AntdIcon';

export default Icon;
