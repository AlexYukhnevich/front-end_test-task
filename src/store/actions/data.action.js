import { dataConstants } from '../constants';

const { 
  DESTROY_SESSION, 
  APP_LOADING, 
  APP_ERROR, 
  APP_ERROR_POPUP 
} = dataConstants;

const destroySession = () => ({
  type: DESTROY_SESSION,
});

const loadingAction = (bool) => ({
  type: APP_LOADING,
  payload: bool,
});

const errorAction = (error) => ({
  type: APP_ERROR,
  payload: error,
});

const errorPopupAction = (bool) => ({
  type: APP_ERROR_POPUP,
  payload: bool,
});


export { destroySession, loadingAction, errorAction, errorPopupAction };