import React from 'react';
import { faSpinner as icon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';

export default function(props) {
  return (<Fa spin {...props} icon={icon} />);
}
