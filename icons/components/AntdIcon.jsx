import React from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";


const Icon = (props, ref) => {
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
      ref={ref}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
    >
       <Fa ref={ref} icon={icon} className={svgClassString} style={svgStyle} />
    </span>
  );
};

Icon.displayName = 'AntdIcon';

export default React.forwardRef(Icon);
