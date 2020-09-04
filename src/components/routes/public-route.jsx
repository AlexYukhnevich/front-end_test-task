import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import TokenService from '../../services/token';

const PublicRoute = ({ component: Component, restricted, ...rest }) => { 
  return (
    <Route 
      { ...rest } 
      render={(props) => (
        TokenService.getAccessToken() && restricted ? <Redirect to='/projects'/> : <Component { ...props }/>
      )}
    />)
}

export default PublicRoute;