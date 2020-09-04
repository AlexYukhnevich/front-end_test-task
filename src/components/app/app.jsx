import React, { useState, useRef, useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundry from '../errors/error-boundry';
import PrivateRoute from '../routes/private-route';
import PublicRoute from '../routes/public-route';
import { StartPage, LoginPage, CrmPage, ErrorPage, SendMail, EmailActivate } from '../../pages';
import { DimensionContext } from '../context';
import { store } from '../../store';
import NetworkService from '../../services/network-service';
import { createBrowserHistory as createHistory } from 'history';
import Footer from '../footer';

const history = createHistory();
NetworkService.setupInterceptors(store, history);

const App = () => {
 
  const targetRef = useRef();
  const [ dimensions, setDimensions ] = useState({ width: 0, height: 0});
  
  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <ErrorBoundry>
      <DimensionContext.Provider value={dimensions}>
        <Router history={history}>
          <div className="app" ref={targetRef}> 
            <Switch >
              <PublicRoute restricted={true} path="/" exact component={StartPage} />
              <PublicRoute restricted={true} path="/login" exact component={LoginPage} />
              <PublicRoute restricted={true} path="/sign-up" exact component={SendMail} />
              <PublicRoute restricted={true} path="/email-activate" exact component={EmailActivate} />
              <PrivateRoute path="/projects" exact component={CrmPage} />
              <Route path="*" exact component={ErrorPage} />
            </Switch> 
            <Footer />
          </div>
        </Router>
        </DimensionContext.Provider>
    </ErrorBoundry>
    </Provider>
  )
};

export default App;

 



















/* <Switch>
              {
                routes.map((route) => <Route {...route} />)
                // routes.map((route) => <RouteWrapper {...route} />)
              }
            </Switch>      */

//   // handleSignUpForm = () => {
  //   this.setState((prevState) => ({
  //     isActiveForm: true
  //   }))
  // }
  