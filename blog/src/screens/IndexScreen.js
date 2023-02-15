import { useContext } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Context as BlogContext } from '../context/BlogContext';

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

const IndexScreen = ({ navigation }) => {
  const { state, addBlog, deleteBlog } = useContext(BlogContext);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
        <View style={styles.row}>
          <Text style={styles.title}>
            {item.id} - {item.title}
          </Text>
          <TouchableOpacity onPress={() => deleteBlog(item.id)}>
            <Feather name="trash" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
        keyExtractor={(blog) => blog.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default IndexScreen;
