import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import CreateArticlePage from "../../containers/CreateArticle/CreateArticlePage";


const mockStore = configureMockStore();
const store = mockStore();

const mockFunction = param => jest.fn(param);

describe("CreateArticlePageContainer", () => {
  test("renders the create article page container", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CreateArticlePage
          createArticle={mockFunction}
        />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
