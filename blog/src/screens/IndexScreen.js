import { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import BlogContext from "../context/BlogContext";

const styles = StyleSheet.create({});

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <View>
      <Button
        title="Add post"
        onPress={() => addBlogPost(`Blog ${data.length + 1}`)}
      />
      <FlatList
        data={data}
        keyExtractor={(blog) => blog.title}
        renderItem={renderItem}
      />
    </View>
  );
};

export default IndexScreen;
