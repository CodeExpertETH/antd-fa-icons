import React from 'react';
import { faSpinner as icon } from '@fortawesome/free-solid-svg-icons';
import AntdIcon from "./AntdIcon";

const Icon = (props, ref) => <Fa {...props} spin ref={ref} icon={icon} />;

export default React.forwardRef(Icon);
