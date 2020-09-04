import { combineReducers } from 'redux';
import { projectReducer } from './project.reducer';
import { authReducer } from './auth.reducer';
import { dataReducer } from './data.reducer';
import { dataConstants } from '../constants';

const { DESTROY_SESSION } = dataConstants;

const appReducer = combineReducers({
  project: projectReducer,
  auth: authReducer,
  data: dataReducer
});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
