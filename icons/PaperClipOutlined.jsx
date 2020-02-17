import React from 'react';
import { faPaperclip as icon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';


const Icon = (props, ref) => <Fa {...props} ref={ref} icon={icon} />;

export default React.forwardRef(Icon);
