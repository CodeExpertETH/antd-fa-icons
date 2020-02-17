import React from 'react';
import { faEdit as icon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';

export default function(props) {
  return (<Fa {...props} icon={icon} />);
}
