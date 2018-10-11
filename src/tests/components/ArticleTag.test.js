import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ArticleTag from "../../components/ArticleTag/ArticleTag";

const mockStore = configureMockStore();
const store = mockStore({});

describe("ArticleTag Component", () => {
  test("renders the ArticleTag Component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ArticleTag />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
