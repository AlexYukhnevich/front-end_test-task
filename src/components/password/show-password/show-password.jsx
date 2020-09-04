import React, { useContext } from 'react';
import { PasswordContext } from '../../context';

const ShowPassword = () => {
  const Password = useContext(PasswordContext);
  
  const toggleField = () => Password.setShowPassword(!Password.showPassword);
  
  return (
    <span className="icon-wrapper icon-wrapper__password" onClick={toggleField}>
      <i className="icon-eye"/>
    </span>
  )
};

export default ShowPassword;