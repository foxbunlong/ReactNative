import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "deleteBlog":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "addBlog",
      payload: { title, content },
    });
    callback();
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({
      type: "deleteBlog",
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, deleteBlog },
  []
);
