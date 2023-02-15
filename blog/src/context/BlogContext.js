import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: `Blog post #${state.length + 1}`,
        },
      ];

    case "deleteBlog":
      return state.filter((item) => item.id !== action.payload);

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
