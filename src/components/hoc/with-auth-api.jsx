import React from 'react';
import { AuthApiContext } from '../context';

// Same logic is in with-project-api. DRY 
const withProjectApiService = (Wrapped) => (props) => {
  return (
    <AuthApiContext.Consumer>
      {
        (api) => {
          return <Wrapped {...props} authApi={api} />
        }
      }
    </AuthApiContext.Consumer>
  )
};

export default withProjectApiService;