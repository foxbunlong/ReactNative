import { createContext, useReducer } from 'react';

const BlogContext = createContext();

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

export const BlogProvider = ({ children }) => {
  // const [blogPosts, setBlogPosts] = useState([
  //   {
  //     title: "Blog 1",
  //   },
  //   {
  //     title: "Blog 2",
  //   },
  //   {
  //     title: "Blog 3",
  //   },
  // ]);

  // Optional initializer function to generate the initial state
  function init(initialValues) {
    return [...initialValues, { title: "Blog 4 - Added" }];
  }

  const [state, dispatch] = useReducer(
    blogReducer,
    [
      {
        title: "Blog 1",
      },
      {
        title: "Blog 2",
      },
      {
        title: "Blog 3",
      },
    ],
    init
  );

  // const addBlog = (blogContent) => {
  //   setBlogPosts([...blogPosts, { title: blogContent }]);
  // };

  // using Reducer
  const addBlog = () => {
    dispatch({
      type: "addBlog",
    });
  };

  return (
    <BlogContext.Provider value={{ data: state, addBlogPost: addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
