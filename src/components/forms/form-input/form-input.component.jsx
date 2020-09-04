import React from 'react';
import { ShowPassword } from '../../password';

const FormInputComponent = (props) => {
  const { 
    name, 
    type, 
    id, 
    label, 
    autoComplete, 
    placeholder, 
    required, 
    handlers, 
    state,
  } = props;

  const { changeField } = handlers;
  const { value } = state;

  return (
    <div className="form-inp">
      <label className="form-inp__label" htmlFor={id}>{label}</label>
      <div className="inp-wrapper">
        <input 
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className="inp-wrapper__item"
          onChange={changeField}
          value={value}
        />
      { id === 'password' && <ShowPassword /> }
      </div>     
    </div>
  )
}

export default FormInputComponent;