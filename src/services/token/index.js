import Cookies from 'universal-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../config';

const cookies = new Cookies();

class TokenService {
  constructor(accessToken, refreshToken) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  getAccessToken() {
    return cookies.get(this.accessToken);
  }

  setAccessToken(token) {
    return cookies.set(this.accessToken, token);
  }

  removeAccessToken() {
    return cookies.remove(this.accessToken);
  };
}

export default new TokenService(ACCESS_TOKEN, REFRESH_TOKEN);
