import React, { useState } from 'react';
import FormInput from '../form-input';
import SubmitButton from '../../structure-elements/submit-button';
import { authInputsData } from '../../../data';
import { useInput } from '../../hooks';
import { withRouter } from 'react-router-dom';
import { tokenErrors } from '../../../errors/messages';

const AuthFormComponent = ({ authApi, history }) => {

  const email = useInput('');
  const password = useInput('');
  const [error, setError] = useState('');
  
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email: email.value, password: password.value };  
      const { success, message, data } = await authApi.signIn(body);

      if (!success) {
        throw new Error(message);
      }
      if (data.access_token) {
        authApi.tokenService.setAccessToken(data.access_token);
        history.push('/projects');
      } else {
        throw new Error(tokenErrors.notFound);
      }  
    } catch ({ message }) {
      setError(message);
    }
  }

  const getHandlersData = () => {
    return [ 
      { 
        handlers: {
          changeField: email.onChange, 
        },
        state: {
          value: email.value,
        },
      },
      {
        handlers: {
          changeField: password.onChange,
        },
        state: {
          value: password.value,
        }
      },
    ]
  } 

  const handlersData = getHandlersData();
  const updatedAuthInputsData = authInputsData.map((data, idx) => ({ ...data, ...handlersData[idx] }));

  return (
    <form 
      className="auth-form"        
      name="login-form"
      onSubmit={onSubmitForm}
    >
      { 
        updatedAuthInputsData
          .map(({ keyId, ...props }) => (
            <FormInput keyId={keyId} { ...props } />
          ))
      }
      <div className={`error-message ${error ? 'visible' : ''}`}>{error}</div>
      <SubmitButton label="Login"/>
    </form>
  )
}

export default withRouter(AuthFormComponent);