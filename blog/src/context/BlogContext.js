import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case "getBlogs":
      return action.payload;
    case "addBlog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "editBlog":
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });

    case "deleteBlog":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

const getBlogs = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({
      type: "getBlogs",
      payload: response.data,
    });
  };
};

const addBlog = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    // dispatch({
    //   type: "addBlog",
    //   payload: { title, content },
    // });
    if (callback) callback();
  };
};

const editBlog = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.patch(`/blogposts/${id}`, { title, content });
    // await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({
      type: "editBlog",
      payload: { id, title, content },
    });
    if (callback) callback();
  };
};

const deleteBlog = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({
      type: "deleteBlog",
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogs, addBlog, editBlog, deleteBlog },
  [{ id: 0, title: "Test local", content: "Test local" }]
);
