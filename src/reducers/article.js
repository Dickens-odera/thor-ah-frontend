import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_LOADING
} from "../actionTypes/article";
import initialState from "../store/initialState";

const article = (state = initialState.article, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload
      };
    case CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default article;
