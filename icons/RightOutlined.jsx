import React from 'react';
import { faChevronRight as icon } from '@fortawesome/free-solid-svg-icons';
import AntdIcon from "./AntdIcon";


const Icon = (props, ref) => <AntdIcon {...props} ref={ref} icon={icon} />;

export default React.forwardRef(Icon);
