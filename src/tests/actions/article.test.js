import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getArticle from "../../actions/article";
import * as types from "../../actionTypes/article";

const API = process.env.REACT_APP_API;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

describe("view article actions", () => {
  afterEach(() => {
    moxios.reset();
  });

  describe("getArticle", () => {
    it("dispatches FETCH_ARTICLE_SUCCESS after fetching articles", () => {
      moxios.onGet(`${API}/api/articles/some-slug`).reply(200, {
        article: {
          id: 3,
          title: "staying fit",
          description: "A short story about a life well lived of Raquel"
        }
      });
      const expectedActions = [
        { type: types.FETCH_ARTICLE_LOADING, payload: true },
        { type: types.FETCH_ARTICLE_LOADING, payload: false },
        {
          type: types.FETCH_ARTICLE_SUCCESS,
          payload: {
            id: 3,
            title: "staying fit",
            description: "A short story about a life well lived of Raquel"
          }
        }
      ];
      const store = mockStore({ article: {} });
      return store.dispatch(getArticle("some-slug")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("dispatches FETCH_ARTICLE_ERROR", () => {
      moxios.onGet(`${API}/api/articles/`).networkError("server error");
      const store = mockStore({ article: {} });
      return store.dispatch(getArticle("some-slug")).then(() => {
        const recievedActions = store.getActions();
        const failureAction = recievedActions.find(
          action => action.type === types.FETCH_ARTICLE_ERROR
        );
        expect(failureAction).toBeTruthy();
      });
    });
  });
});
