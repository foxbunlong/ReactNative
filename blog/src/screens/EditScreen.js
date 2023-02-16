import { useContext } from "react";
import { StyleSheet } from "react-native";

import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const styles = StyleSheet.create({});

const EditScreen = ({ navigation }) => {
  const { state, editBlog } = useContext(Context);

  const id = navigation.getParam("id");

  const blogPost = state.find((item) => item.id === id);

  return (
    <BlogPostForm
      initial={blogPost}
      onSubmit={(title, content) => {
        editBlog(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default EditScreen;
