import { combineReducers } from 'redux';
import auth from './auth';
import signinuser from './signin';
import signup from './signup';
import articleCategoryReducer from './categories';

const rootReducer = combineReducers({
  auth,
  signinuser,
  signup,
  category: articleCategoryReducer
});

export default rootReducer;
