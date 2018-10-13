import articleCategoryReducer from '../../reducers/categories';
import * as types from '../../actionTypes/categories';

describe('Categories reducer', () => {
  it('should return initial state', () => {
    expect(articleCategoryReducer(undefined, {})).toEqual({
      category: {
        isLoading: false,
        isError: false,
        data: {}
      },
      categories: {
        isLoading: false,
        isError: false,
        data: []
      },
    });
  });

  it('should handle FETCH_CATEGORY', () => {
    const action = {
      type: types.FETCH_CATEGORY,
    };
    expect(articleCategoryReducer({}, action)).toEqual({
      category: {
        isError: false,
        isLoading: true,
      },
    });
  });

  it('should handle FETCH_CATEGORY_SUCCESS', () => {
    const action = {
      type: types.FETCH_CATEGORY_SUCCESS,
    };
    expect(articleCategoryReducer({}, action)).toEqual({
      category: {
        isLoading: false,
        isError: false,
        data: action.payload
      },
    });
  });

  it('should handle FETCH_CATEGORY_ERROR', () => {
    const action = {
      type: types.FETCH_CATEGORY_ERROR,
    };
    expect(articleCategoryReducer({}, action)).toEqual({
      category: {
        isLoading: false,
        isError: true,
      },
    });
  });

  it('should handle FETCH_CATEGORIES', () => {
    const action = {
      type: types.FETCH_CATEGORIES,
    };
    expect(articleCategoryReducer({}, action)).toEqual({
      categories: {
        isError: false,
        isLoading: true,
      },
    });
  });

  it('should handle FETCH_CATEGORIES_SUCCESS', () => {
    const action = {
      type: types.FETCH_CATEGORIES_SUCCESS,
    };
    expect(articleCategoryReducer({}, action)).toEqual({
      categories: {
        isLoading: false,
        isError: false,
        data: action.payload
      },
    });
  });

  it('should handle FETCH_CATEGORIES_ERROR', () => {
    const action = {
      type: types.FETCH_CATEGORIES_ERROR,
    };
    expect(articleCategoryReducer({}, action)).toEqual({
      categories: {
        isLoading: false,
        isError: true,
      },
    });
  });
});
