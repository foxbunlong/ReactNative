import { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';

const styles = StyleSheet.create({});

const IndexScreen = () => {
  const { state, addBlog } = useContext(BlogContext);

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
        onPress={() => addBlog(`Blog ${state.length + 1}`)}
      />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={renderItem}
      />
    </View>
  );
};

export default IndexScreen;
