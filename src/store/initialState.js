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
  article: {
    article: {},
    loading: false,
    error: {}
  }
};

export default initialState;
