import { combineReducers } from 'redux';
import auth from './auth';
import signinuser from './signin';
import signup from './signup';
import article from "./article";

// initial dummy state setup
const app = (state = { intro: "welcome to ah" }) => state;

const rootReducer = combineReducers({
  auth,
  signinuser,
  signup,
  article
});

export default rootReducer;
