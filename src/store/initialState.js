const initialState = {
  auth: {
    user: {},
    signin: {
      loading: false,
      error: ""
    },
    signup: {
      loading: false,
      error: ""
    },
    isAuthenticated: false
  },
  comments: {
    articleComments: {
      data: [],
      error: "",
      loading: false
    },
    newComment: {
      data: {},
      error: "",
      loading: false
    }
  },
  article: {
    article: {
      author: {},
      tags: [{}]
    },
    loading: false,
    error: ""
  }
};
export default initialState;
