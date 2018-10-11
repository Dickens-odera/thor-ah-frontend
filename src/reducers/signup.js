import { SIGNUP_LOADING, SIGNUP_ERROR } from "../actionTypes/signup";
import initialState from "../store/initialState";

export default function signup(state = initialState.auth.signup, action) {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: ""
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
