import React from "react";
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import AllCategories from '../../containers/Categories/Categories';


describe('Categories Container', () => {
  test("renders the Categories Container", () => {
    const wrapper = shallow(
      <Provider>
        <AllCategories />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
