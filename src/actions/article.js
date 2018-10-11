import axios from "axios";
import dotenv from "dotenv";

import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_LOADING
} from "../actionTypes/auth";

dotenv.config();

const setArticleSuccess = article => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload: article
});

const setArticleLoading = isLoading => ({
  type: CREATE_ARTICLE_LOADING,
  payload: isLoading
});

const setArticleFailure = error => ({
  type: CREATE_ARTICLE_FAILURE,
  payload: error
});

export const createArticle = articleData => dispatch => {
  // const someUser = {
  //   name: "Some name",
  //   token:
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzkxNjg5ODgsImV4cCI6MTU3MTQ4MjU4OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.DyNHulvnxYECg1DFrq8PC0eGvQDUOCyYGE3b_FodoGE"
  // };

  const { token } = localStorage;
  // localStorage.setItem("user", JSON.stringify(someUser));
  // const user = JSON.parse(localStorage.getItem("user"));
  // const { token } = user;

  dispatch(setArticleLoading(true));
  return axios
    .post(process.env.REACT_APP_API, articleData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.data.status === "success") {
        // const { slug } = response.data;
        // history.push(`/articles/${slug}`);
        console.log(response);
        dispatch(setArticleLoading(false));
        return dispatch(
          setArticleSuccess(response.data.newArticleAlert.createdArticle)
        );
      }
      console.log(response);
      return dispatch(setArticleFailure(response.data.error));
    })
    .catch(error => console.log(error));
};

export default createArticle;
