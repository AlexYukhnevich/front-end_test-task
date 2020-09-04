import React, { useState, useLayoutEffect, useRef, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { registrationInputsData, checkboxFormData, passwordColumnsData } from '../../../data';
import FormInputContainer from '../form-input';
import SubmitButton from '../../structure-elements/submit-button';
import CheckboxElement from '../../structure-elements/checkbox-element';
import { validatePassword, checkFields } from '../../../utils';
import { useInput } from '../../hooks';
import { DimensionContext } from '../../context';
import { userErrors } from '../../../errors/messages';
import { isEqual } from 'lodash';
import { CHANGE_COMPONENT_STRUCTURE } from '../../../config';

import ErrorMessage from '../../errors/error-message';

const RegistrationFormComponent = ({ authApi, history }) => {
  const targetRef = useRef();
  const App = useContext(DimensionContext);
  const [ styles, setStyles ] = useState('');


  useLayoutEffect(() => {
    if (targetRef.current) {
      const className = App.height < targetRef.current.offsetHeight ? CHANGE_COMPONENT_STRUCTURE : '';
      setStyles(className);
    }
  }, []);

  const [state] = useState(registrationInputsData);
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');
  const repeatEmail = useInput('');
  const password = useInput('');
  const repeatPassword = useInput('');
  const dateOfBirth = useInput('');

  const [ isActiveCheckbox, setCheckbox ] = useState(false);
  const [ error, setError ] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (checkFields({
          ...validatePassword(password.value),
          firstName: firstName.value, 
          lastName: lastName.value, 
          email: email.value, 
          repeatEmail: isEqual(email.value, repeatEmail.value), 
          password: password.value,
          repeatPassword: isEqual(password.value, repeatPassword.value),
          dateOfBirth: dateOfBirth.value,
          isActiveCheckbox: isActiveCheckbox,
        })) {

        const body = { 
          first_name: firstName.value, 
          last_name: lastName.value, 
          email: email.value, 
          password: password.value, 
          date_of_birth: dateOfBirth.value,
        };
  
        const response = await authApi.signUp(body);
        if (response.success) {
          history.push('/sign-up');
        }
      } else {
        throw new Error(userErrors.invalidFields)
      } 
    } 
    catch ({ message }) {
      setError(message);
    }
  }

  const getHandlersData = () => {
    return {
      handlersData: [ 
        { 
          handlers: {
            changeField: firstName.onChange, 
          },
          state: {
            value: firstName.value,
          },
        },
        {
          handlers: {
            changeField: lastName.onChange,
          },
          state: {
            value: lastName.value,
          }
        },
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
            changeField: repeatEmail.onChange,
          },
          state: {
            value: repeatEmail.value,
          }
        },
        { 
          handlers: {
            changeField: password.onChange, 
          },
          state: {
            value: password.value,
            error: error,            
            columns: passwordColumnsData,
          }
        },
        {
          handlers: {
            changeField: repeatPassword.onChange, 
          },
          state: {
            value: repeatPassword.value,
          }
        },
        {
          handlers: {
            changeField: dateOfBirth.onChange, 
          },
          state: {
            value: dateOfBirth.value,
          }
        },
      ],
      checkboxData: {
        ...checkboxFormData,
        handler: () => setCheckbox(!isActiveCheckbox), 
        checked: isActiveCheckbox,
      }
    }
  }

  const { handlersData, checkboxData } = getHandlersData();
  const updatedRegistrationInputsData = state.map((data, idx) => ({ ...data, ...handlersData[idx]}));

  return (
    <form 
      className={`registration-form ${styles}`}
      name="registration-form"
      onSubmit={onSubmitForm}
      ref={targetRef}
    >
      { 
        updatedRegistrationInputsData
          .map(({ keyId, ...props }) => (
            <FormInputContainer key={keyId} {...props } styles={styles}/>
          ))
      }
      <CheckboxElement { ...checkboxData } styles={styles} />
      <ErrorMessage styles={styles} error={error}/> 
      <SubmitButton styles={styles} label="Submit"/>
    </form>
  )
};

export default withRouter(RegistrationFormComponent);