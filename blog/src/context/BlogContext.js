import { createContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "Blog 1",
    },
    {
      title: "Blog 2",
    },
    {
      title: "Blog 3",
    },
  ]);

  const addBlog = (blogContent) => {
    setBlogPosts([...blogPosts, {title: blogContent}]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
