const initialState = {
  auth: {
    user: {},
    signin: {
      loading: false,
      error: ''
    },
    signup: {
      loading: false,
      error: ''
    },
    isAuthenticated: false
  },
  articleCategory: {
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
  }
};

export default initialState;
