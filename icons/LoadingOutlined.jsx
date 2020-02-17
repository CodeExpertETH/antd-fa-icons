import React from 'react';
import { faSpinner as icon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';

const Icon = (props, ref) => <Fa {...props} spin ref={ref} icon={icon} />;

export default React.forwardRef(Icon);
