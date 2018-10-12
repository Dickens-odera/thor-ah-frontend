import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import thunk from "redux-thunk";
import { createArticle } from "../../actions/article";
import * as types from "../../actionTypes/article";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(axios);

describe("create article actions", () => {
  afterEach(() => {
    mockAdapter.reset();
  });

  describe("CreateArticlePage", () => {
    it("dispatches CREATE_ARTICLE_LOADING action", () => {
      const newArticle = {
        title: "Sample Title",
        body: "Sample Body",
        description: "Sample Description"
      };
      const mockData = {
        newArticleAlert: {
          author: {
            bio: null,
            email: "author2@mail.com",
            image: null,
            username: "randomAuthor2"
          },
          createdArticle: {
            authorId: 3,
            body: "Sample Body",
            createdAt: "2018-10-12T09:42:24.230Z",
            description: "Sample Description",
            displayStatus: true,
            id: 15,
            slug: "SampleTitle151426",
            tags: [],
            timeToRead: 1,
            title: "Sample Title",
            updatedAt: "2018-10-12T09:42:24.230Z"
          }
        },
        status: "success"
      };
      mockAdapter
        .onPost(
          `https://thor-ah-staging.herokuapp.com/api/articles`,
          newArticle
        )
        .reply(201, mockData);

      const expectedActions = [
        {
          type: types.CREATE_ARTICLE_LOADING,
          payload: true
        },
        {
          type: types.CREATE_ARTICLE_LOADING,
          payload: false
        },
        {
          type: types.CREATE_ARTICLE_SUCCESS,
          payload: mockData.newArticleAlert.createdArticle
        }
      ];
      const store = mockStore({ article: {} });
      return store.dispatch(createArticle(newArticle)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
