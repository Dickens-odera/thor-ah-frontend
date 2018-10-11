import article from "../../reducers/article";
import * as types from "../../actionTypes/article";

describe("article reducer", () => {
  it("should return initial state", () => {
    expect(article(undefined, {})).toEqual({
      article: {
        author: {},
        tags: [{}]
      },
      loading: false,
      error: ""
    });
  });
  it("should handle FETCH_ARTICLE_SUCCESS", () => {
    const action = {
      type: types.FETCH_ARTICLE_SUCCESS,
      payload: {
        article: {
          id: 2,
          title: "staying fit",
          description: "fitness",
          body:
            "To stay fit, eat well, exercise daily and visit your doctor monthly"
        }
      }
    };
    expect(article({}, action)).toEqual({ article: action.payload });
  });
  it("should handle FETCH_ARTICLE_LOADING", () => {
    const action = {
      type: types.FETCH_ARTICLE_LOADING,
      payload: { loading: true }
    };
    expect(article({}, action)).toEqual({
      loading: action.payload
    });
  });
  it("should handle FETCH_ARTICLE_ERROR", () => {
    const action = {
      type: types.FETCH_ARTICLE_ERROR,
      payload: "error"
    };
    expect(article({}, action)).toEqual({
      error: action.payload
    });
  });
});
