import { combineReducers } from 'redux';
import auth from './auth';
import signinuser from './signin';
import article from './article';

const rootReducer = combineReducers({
  auth,
  signinuser,
  article,
});

export default rootReducer;
