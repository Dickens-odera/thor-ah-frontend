import React from "react";
import { shallow } from "enzyme";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ArticleContent from "../../components/ArticleContent/ArticleContent";

const mockStore = configureMockStore();
const store = mockStore({});
describe("ArticleContent Component", () => {
  test("renders the ArticleContent Component", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ArticleContent />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
