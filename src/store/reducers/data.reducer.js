import { dataConstants } from '../constants';

const { APP_ERROR, APP_LOADING, APP_ERROR_POPUP } = dataConstants;

const dataState = {
  loading: false,
  error: '',
  openPopup: false,
};

export const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case APP_ERROR:
      return { ...state, error: action.payload };
    case APP_ERROR_POPUP:
      return { ...state, error: '', openPopup: action.payload };
    case APP_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
