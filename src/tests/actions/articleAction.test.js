import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import thunk from "redux-thunk";
import { createArticle } from "../../actions/articleAction";
import * as types from "../../actions/action.types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(axios);
const API_URL = process.env.REACT_APP_API;

describe("create article actions", () => {
  afterEach(() => {
    mockAdapter.reset();
    mockAdapter.restore();
  });

  describe("CreateArticlePage", () => {
    it("dispatches CREATE_ARTICLE_LOADING action", () => {
      mockAdapter.onPost()
      mockAdapter.onPost(`${API_URL}/create-article`).reply(201, {
        article: [
          {
            id: 1,
            article: "article"
          }
        ]
      });
      const newArticle = {
        title: "Sample Title",
        body: "Sample Body",
        description: "Sample Description"
      };
      const expectedActions = [
        {
          type: types.CREATE_ARTICLE_LOADING,
          payload: true
        },
        {
          type: types.CREATE_ARTICLE_SUCCESS,
          payload: [
            {
              id: 1,
              article: "article"
            }
          ]
        }
      ];
      const store = mockStore({ article: {} });
      return store.dispatch(createArticle(newArticle)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
