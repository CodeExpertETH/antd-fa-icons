import React from 'react';
import { faClock as icon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';


const Icon = (props, ref) => <Fa {...props} ref={ref} icon={icon} />;

export default React.forwardRef(Icon);
