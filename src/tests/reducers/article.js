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
      loading: true,
      error: {}
    });
  });

  // it("should handle CREATE_ARTILCE_SUCCESS", () => {
  //   const action = { type: types.CREATE_ARTICLE_SUCCESS, payload: {title: 'sample title', body: "sample body", description: 'sample description'} };
  //   expect(article({}, action)).toEqual({
  //     loading: false,
  //     error: {},
  //     article: { new }
  //   });
  // });
});
