import axios from "axios";

import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, CLEAR_ERROR, SIGN_IN_LOADING } from "../actionTypes/signin";

const API = "https://thor-ah-staging.herokuapp.com";

const signInSuccess = body => ({
  type: SIGN_IN_SUCCESS,
  payload: body
});

const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

const siginLoading = (payload) => ({
  type: SIGN_IN_LOADING,
  payload

})

export const clearErrors = () => ({
  type: CLEAR_ERROR
});


const signIn = (user) => (dispatch) => {
  dispatch(siginLoading(true));
  axios
    .post(`${API}/api/users/login`, user)
    .then(response => {
      localStorage.setItem("token", response.data.user.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(siginLoading(false));
      dispatch(signInSuccess(response.data));
    })
    .catch(error => {
      dispatch(siginLoading(false));
      if (error.response) {
        return dispatch(signInFailure(error.response.data));
      }
      return dispatch(signInFailure({ error: { message: 'Server unreachable at the moment' } }))
    })
};

export default signIn;
