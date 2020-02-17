import React from 'react';
import { faFolderOpen as icon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';

export default React.forwardRef(function(props, ref) {
  return (<Fa {...props} ref={ref} icon={icon} />);
})
