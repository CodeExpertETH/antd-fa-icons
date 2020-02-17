import React from 'react';
import { faSpinner as icon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';

export default React.forwardRef(function(props, ref) {
  return (<Fa spin {...props} icon={icon} />);
})
