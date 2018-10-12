import initialState from '../store/initialState';

import {
  FETCH_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
} from '../actionTypes/categories';


const articleCategoryReducer = (state = initialState.articleCategory, action) => {
  switch (action.type) {
    case FETCH_CATEGORY: {
      const category = {
        isLoading: true,
        isError: false,
      };
  
      return {
        ...state,
        category
      };
    }
    case FETCH_CATEGORY_SUCCESS: {
      const category = {
        isLoading: false,
        isError: false,
        data: action.payload
      };
  
      return {
        ...state,
        category
      };
    }
    case FETCH_CATEGORY_ERROR: {
      const category = {
        isLoading: false,
        isError: true,
      };
  
      return {
        ...state,
        category
      };
    }
    case FETCH_CATEGORIES: {
      const categories = {
        isLoading: true,
        isError: false,
      };
  
      return {
        ...state,
        categories
      };
    }
    case FETCH_CATEGORIES_SUCCESS: {
      const categories = {
        isLoading: false,
        isError: false,
        data: action.payload
      };
  
      return {
        ...state,
        categories
      };
    }
    case FETCH_CATEGORIES_ERROR: {
      const categories = {
        isLoading: false,
        isError: true,
      };
  
      return {
        ...state,
        categories
      };
    }
    default:
      return state;
  }
}

export default articleCategoryReducer;
