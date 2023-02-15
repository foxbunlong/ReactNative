import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { Context } from "../context/BlogContext";

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

export default CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlog } = useContext(Context);

  const onSubmit = () => {
    addBlog(title, content, () => {
      navigation.pop();
    });
  };

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput style={styles.input} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Add" onPress={onSubmit} />
    </View>
  );
};
