import React from 'react';
import { ProjectApiContext } from '../context';

// Same logic is in with-auth-api. DRY 
const withProjectApiService = (Wrapped) => (props) => {
  return (
    <ProjectApiContext.Consumer>
      {
        (projectApi) => {
          return <Wrapped {...props} projectApi={projectApi} />
        }
      }
    </ProjectApiContext.Consumer>
  )
};

export default withProjectApiService;