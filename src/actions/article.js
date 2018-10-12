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
  const { token } = localStorage;

  dispatch(setArticleLoading(true));
  return axios
    .post("https://thor-ah-staging.herokuapp.com/api/articles", articleData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.data.status === "success") {
        // const { slug } = response.data;
        // history.push(`/articles/${slug}`);
        dispatch(setArticleLoading(false));
        return dispatch(
          setArticleSuccess(response.data.newArticleAlert.createdArticle)
        );
      }
      return dispatch(setArticleFailure(response.data.error));
    })
    .catch(error => console.log(error, "error from creating article"));
};

export default createArticle;
