import article from "../../reducers/article";
import * as types from "../../actionTypes/article";

describe("article reducer", () => {
  it("should return initial state", () => {
    expect(article(undefined, {})).toEqual({
      article: {},
      loading: false,
      error: {}
    });
  });

  it("should handle CREATE_ARTILCE_LOADING", () => {
    const action = { type: types.CREATE_ARTICLE_LOADING, payload: true };
    expect(article({}, action)).toEqual({
      loading: true
    });
  });

  it("should handle CREATE_ARTILCE_FAILURE", () => {
    const action = { type: types.CREATE_ARTICLE_FAILURE, payload: "error" };
    expect(article({}, action)).toEqual({
      error: "error"
    });
  });

  it("should handle CREATE_ARTILCE_SUCCESS", () => {
    const action = {
      type: types.CREATE_ARTICLE_SUCCESS,
      payload: {
        title: "sample title",
        body: "sample body",
        description: "sample description"
      }
    };
    expect(article({}, action)).toEqual({
      article: {
        body: "sample body",
        description: "sample description",
        title: "sample title"
      }
    });
  });
});
