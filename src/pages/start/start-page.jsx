import React, { useState } from 'react';
import { compose } from 'redux';
import authApi from '../../services/auth';
import { withAuthApiService } from '../../components/hoc';
import { AuthApiContext } from '../../components/context';
import { Popup, Header } from '../../components/wrappers';
import Content from '../../components/content';
import RegistrationForm from '../../components/forms/registration-form';
import StartPageNav from '../../components/navigation/start-page-nav';
import StartPageContent from '../../components/content/start-page-content';

const SignUpForm = compose(withAuthApiService, Popup)(RegistrationForm);
const StartPageHeader = Header(StartPageNav);

const StartPage = () => {
  const [ activeForm, setActiveForm ] = useState(false);

  const handlePopup = () => setActiveForm(!activeForm);
  
  return (
    <AuthApiContext.Provider value={authApi}>
      <StartPageHeader handleForm={handlePopup}/>
      <Content>
        { activeForm && 
          <SignUpForm 
            togglePopup={handlePopup} 
          /> 
        }
        <StartPageContent />
      </Content>
    </AuthApiContext.Provider>
  )
};

export default StartPage;