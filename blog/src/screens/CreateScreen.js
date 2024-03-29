import { useContext } from "react";
import { StyleSheet } from "react-native";

import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const styles = StyleSheet.create({});

export default CreateScreen = ({ navigation }) => {
  const { addBlog } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlog(title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};
