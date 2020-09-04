import { authConstants } from '../constants';

const { UNAUTH_USER, SET_USER } = authConstants;

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logOut = () => ({
  type: UNAUTH_USER,
});
