import React from 'react';
import { faFolderOpen as icon } from '@fortawesome/free-regular-svg-icons';
import AntdIcon from "./AntdIcon";


const Icon = (props, ref) => <AntdIcon {...props} ref={ref} icon={icon} />;

export default React.forwardRef(Icon);
