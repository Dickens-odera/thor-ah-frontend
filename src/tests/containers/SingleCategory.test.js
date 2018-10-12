import React from "react";
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ArticleCategory from '../../containers/Categories/SingleCategory';


describe('SingleCategory Container', () => {
  test("renders the SingleCategory Container", () => {
    const wrapper = shallow(
      <Provider>
        <ArticleCategory />
      </Provider>
    );

    expect(wrapper.exists()).toBe(true);
  });
});
