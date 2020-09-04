import React from 'react';
import { Header } from '../../components/wrappers';
import { withAuthApiService } from '../../components/hoc';
import { AuthApiContext } from '../../components/context';
import { HomePageNav } from '../../components/navigation';
import Content from '../../components/content';
import AuthFormComponent from '../../components/forms/auth-form';

import authApi from '../../services/auth';

const LoginHeader = Header(HomePageNav);
const AuthForm = withAuthApiService(AuthFormComponent);

const LoginPage = () => {
  return (
    <AuthApiContext.Provider value={authApi}>
      <LoginHeader />
      <Content>
        <AuthForm/>
      </Content> 
    </AuthApiContext.Provider>
  )
}

export default LoginPage;