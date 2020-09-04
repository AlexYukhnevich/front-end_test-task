import axios from 'axios';
import Api from '../api';
import { BASE_URL, AUTH_PREFIX } from '../../config';
import TokenService from '../token';

class AuthorizationApi extends Api {
  constructor(url, tokenService) {
    super();
    this.url = url;
    this.tokenService = tokenService;
  }

  signIn = async (data) => {
    return this.sendRequest(axios.post(`${this.url}/login`, data));
  }

  signUp = async (data) => {
    return this.sendRequest(axios.post(`${this.url}/sign-up`, data));
  }

  logOut = async () => this.tokenService.removeAccessToken();
}

export default new AuthorizationApi(`${BASE_URL}${AUTH_PREFIX}`, TokenService);