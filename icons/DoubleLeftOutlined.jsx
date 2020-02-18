import React from 'react';
import { faAngleDoubleLeft as icon } from '@fortawesome/free-solid-svg-icons';
import AntdIcon from "./AntdIcon";


const Icon = (props, ref) => <AntdIcon {...props} ref={ref} icon={icon} />;

export default React.forwardRef(Icon);
