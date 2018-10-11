import { FETCH_ARTICLE, ARTICLE_LOADING, FETCH_ARTICLE_FAILURE } from "../actions/action.types";
// initial state
import initialState from "../store/initialState";

export default function reducer(state = initialState.article, action) {
  switch (action.type) {
    case ARTICLE_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case FETCH_ARTICLE:
      return {
        ...state,
        article: action.payload
      };
    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
