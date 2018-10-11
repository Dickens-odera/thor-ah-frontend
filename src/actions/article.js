import axios from "axios";
import {
  FETCH_ARTICLE,
  ARTICLE_LOADING,
  FETCH_ARTICLE_FAILURE
} from "./action.types";

const API = process.env.REACT_APP_API;

const fetchArticleSuccess = payload => ({
  type: FETCH_ARTICLE,
  payload
});

const articleLoading = payload => ({
  type: ARTICLE_LOADING,
  payload
});

const fetchArticleFailure = payload => ({
  type: FETCH_ARTICLE_FAILURE,
  payload
});

const getArticle = article => dispatch => {
  dispatch(articleLoading(true));
  axios
    .get(API, article)
    .then(response => {
      dispatch(articleLoading(false));
      dispatch(fetchArticleSuccess(response));
    })
    .catch(error => {
      dispatch(articleLoading(false));
      if (error.response) {
        return dispatch(fetchArticleFailure(error.response.data));
      }
      return dispatch(
        fetchArticleFailure({
          error: { message: "Server unreachable at the moment" }
        })
      );
    });
};

export default getArticle;
