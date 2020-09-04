import axios  from 'axios';
import TokenService from "./token";
import { logOut } from '../store/actions/auth.action';
import { AUTHORIZATION_TOKEN_PREFIX } from '../config';

export default {
  setupInterceptors: (store, history) => {
    axios.interceptors.request.use(
      config => {

        const token = TokenService.getAccessToken();

        if (token) {
          config.headers['Authorization'] = `${AUTHORIZATION_TOKEN_PREFIX} ${token}`
        } else {
          delete config.headers['Authorization'];
        }

        return config;
      },
      error => Promise.reject(error)
    );

    axios.interceptors.response.use(
      (response) => response, 
      (error) => {

        TokenService.removeAccessToken();

        if (error.response.status === 401) {
          store.dispatch(logOut());
          history.push('/login');
        }

        if (error.response.status === 404) {
          history.push('/not-found');
        }

        return Promise.reject(error);
      }
    );
  }
};