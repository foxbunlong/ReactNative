import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return [...state, { title: `Blog post #${state.length + 1}` }];

    case "editBlog":
      return state;

    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return () => {
    dispatch({
      type: "addBlog",
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog },
  []
);
