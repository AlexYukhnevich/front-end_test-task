import  { authConstants } from '../constants';

const { UNAUTH_USER, SET_USER } = authConstants;

const authState = {
  user: null,
};

export const authReducer = (state = authState, action) => {
  switch (action.type) {
    case UNAUTH_USER:
      return { user: null };
    case SET_USER:
      return { user: action.payload };
    default:
      return state;
  }
};
