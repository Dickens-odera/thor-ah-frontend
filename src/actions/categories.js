/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import {
  FETCH_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
} from '../actionTypes/categories';

// APP API
const API = process.env.REACT_APP_API;

// Categories
const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

// Get Category
const fetchCategoriesSuccess = (payload) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload
});

const fetchCategoriesError = () => ({
  type: FETCH_CATEGORIES_ERROR,
});


// Get all Categories
export const getAllCategories = () => dispatch => {
  dispatch(fetchCategories());
  return axios
    .get(`${API}/api/article-categories`)
    .then(response => {
      if (response.data.status === 'success') {
        return dispatch(fetchCategoriesSuccess(response.data.categories));
      }
      return dispatch(fetchCategoriesError());
    })
    .catch(() => dispatch(fetchCategoriesError()));
};


// Category
const fetchCategory = () => ({
  type: FETCH_CATEGORY,
});

const fetchCategorySuccess = (payload) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload,
});

const fetchCategoryError = () => ({
  type: FETCH_CATEGORY_ERROR,
});

// Get Article Category
export const fetchCategoryAction = (categoryName) => dispatch => {
  dispatch(fetchCategory());
  return axios
    .get(`${API}/api/article-categories/${categoryName}/articles`)
    .then(response => {
      if (response.data.status === 'success') {
        return dispatch(fetchCategorySuccess(response.data.category));
      }
      return dispatch(fetchCategoryError());
    })
    .catch(() => dispatch(fetchCategoryError()));
};
