import React,{ Fragment } from 'react';
import { Header } from '../../components/wrappers';
import LoginPageNav from '../../components/navigation/login-page-nav';
import Content from '../../components/content';
import EmailMessage from '../../components/email';
import { ACTIVATE_MESSAGE_TEXT } from '../../constants';

const SendMailHeader = Header(LoginPageNav);

const EmailActivate = () => {
  return (
    <Fragment>
      <SendMailHeader />
      <Content>
        <EmailMessage text={ACTIVATE_MESSAGE_TEXT}/>
      </Content>
    </Fragment>
  )
};

export default EmailActivate;
