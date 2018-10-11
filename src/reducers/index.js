import { combineReducers } from 'redux';
import auth from './auth';
import signinuser from './signin';
import signup from './signup';
import comments from './comments';
import article from './article';

const rootReducer = combineReducers({
  auth,
  signinuser,
  signup,
  comments,
  article
});

export default rootReducer;
