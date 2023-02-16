import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 9,
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 5,
  },
});

const BlogPostForm = ({ initial, onSubmit }) => {
  const [title, setTitle] = useState(initial.title);
  const [content, setContent] = useState(initial.content);

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        defaultValue={initial.title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.input}
        defaultValue={initial.content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Add" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initial: {
    title: "",
    content: "",
  },
};

export default BlogPostForm;
