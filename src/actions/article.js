import axios from "axios";
import {
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_ERROR,
  FETCH_ARTICLE_LOADING
} from "../actionTypes/article";

const API = process.env.REACT_APP_API;

const fetchArticleSuccess = payload => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload
});

const fetchArticleLoading = payload => ({
  type: FETCH_ARTICLE_LOADING,
  payload
});

const fetchArticleError = payload => ({
  type: FETCH_ARTICLE_ERROR,
  payload
});

const getArticle = (articleSlug) => (dispatch) => {
  dispatch(fetchArticleLoading(true));
  const { token } = localStorage;
  return axios
    .get(`${API}/api/articles/${articleSlug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      dispatch(fetchArticleLoading(false));
      dispatch(fetchArticleSuccess(response.data.article));
    })
    .catch(error => {
      dispatch(fetchArticleLoading(false));
      if (error.response) {
        return dispatch(fetchArticleError(error.response.data));
      }
      return dispatch(
        fetchArticleError({
          error: { message: "Server unreachable at the moment" }
        })
      );
    });
};

export default getArticle;
