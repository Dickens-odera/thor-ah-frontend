import { combineReducers } from 'redux';
import auth from './auth';
import signinuser from './signin';
import signup from './signup';
import article from "./article";

const rootReducer = combineReducers({
  auth,
  signinuser,
  signup,
  article
});

export default rootReducer;
