import React, { Fragment } from 'react';
import EmailMessage from '../../components/email';
import { Header } from '../../components/wrappers';
import { HomePageNav } from '../../components/navigation';
import Content from '../../components/content';
import { SEND_MESSAGE_TEXT } from '../../constants';

const SendMailHeader = Header(HomePageNav);

const SendMail = () => {
  return (
    <Fragment>
      <SendMailHeader />
      <Content>
        <EmailMessage text={SEND_MESSAGE_TEXT}/>
      </Content>
    </Fragment>
  )
};

export default SendMail;
