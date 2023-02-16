import { useContext, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { Context as BlogContext } from "../context/BlogContext";

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
  const { state, getBlogs, deleteBlog } = useContext(BlogContext);

  useEffect(() => {
    getBlogs();

    // Listen to event trigged when back from other screens to Index screen
    const listener = navigation.addListener("didFocus", () => {
      console.log("didFocus");
      getBlogs();
    });

    return () => {
      // Only called when instance of Index Screen is completely stopped showing on screen
      console.log("disposed");
      listener.remove();
    };
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Show", { id: item.id })}
      >
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
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.id}
        renderItem={renderItem}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default IndexScreen;
