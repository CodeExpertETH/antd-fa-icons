import React from 'react';
import { faChevronLeft as icon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';

export default React.forwardRef(function(props, ref) {
  return (<Fa {...props} ref={ref} icon={icon} />);
})
