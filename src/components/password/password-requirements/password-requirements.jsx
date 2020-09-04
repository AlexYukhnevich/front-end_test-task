import React from 'react';
import Column from '../../structure-elements/column';
import { validatePassword } from '../../../utils';

const className = 'password-requirements';

const PasswordRequirements = ({ state, styles }) => {
  const { value, error, columns } = state;
  const { left, right } = columns;

  const passwordState = validatePassword(value);
  const changeStructure = styles ? `${styles}-req__column` : '';

  return ( 
    <div className={className}>
      <Column 
        className={`${className}__column ${changeStructure}`} 
        column={left} 
        error={error} 
        passwordState={passwordState}
      />  
      <Column 
        className={`${className}__column ${changeStructure}`} 
        column={right} 
        error={error} 
        passwordState={passwordState}
      />  
    </div>
  )
}

export default PasswordRequirements;