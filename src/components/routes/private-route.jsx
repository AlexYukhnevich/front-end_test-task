import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import TokenService from '../../services/token';

const PrivateRoute = ({ component: Component, ...rest }) => { 
  return (
    <Route 
      { ...rest } 
      render={(props) => (
        TokenService.getAccessToken() ? <Component { ...props }/> : <Redirect to='/login'/>
      )}
    />)
}

export default PrivateRoute;