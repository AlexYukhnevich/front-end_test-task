import React, { Fragment, useState } from 'react';
import FormInputComponent from './form-input.component';
import { PasswordRequirements } from '../../password';
import { PasswordContext } from '../../context';

const FormInputContainer = (props) => {
  const { id, state, styles } = props;
  const [ showPassword, setShowPassword ] = useState(false);

  let updatedProps = props;

  if (id === 'password') {    
    updatedProps = { ...props, type: showPassword ? 'text' : 'password'};
    return (
      <Fragment>
        <PasswordContext.Provider value={{ showPassword, setShowPassword }}>
          <FormInputComponent { ...updatedProps } />
          <PasswordRequirements state={state} styles={styles}/>
        </PasswordContext.Provider>
      </Fragment>
    )
  }
  return <FormInputComponent { ...updatedProps }/>
}

export default FormInputContainer;
