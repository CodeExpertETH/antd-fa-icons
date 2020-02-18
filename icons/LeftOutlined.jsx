import React from 'react';
import { faChevronLeft as icon } from '@fortawesome/free-solid-svg-icons';
import AntdIcon from "./AntdIcon";


const Icon = (props, ref) => <AntdIcon spin {...props} ref={ref} icon={icon} />;

export default React.forwardRef(Icon);
