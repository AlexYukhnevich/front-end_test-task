import React from 'react';
import Row from '../row';

const PasswordColumn = (props) => {
  const { column, className, passwordState, error } = props;
  return (
    <ul className={className}>
      {
        column.map(({ keyId, label, verification }) => (
          <Row 
            key={keyId} 
            className={className} 
            label={label} 
            verification={passwordState[verification]}
            error={error}
          />
        ))
      }
    </ul>
  ) 
}

export default PasswordColumn;