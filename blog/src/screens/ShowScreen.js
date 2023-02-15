import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Context } from "../context/BlogContext";

const styles = StyleSheet.create({});

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((item) => item.id === navigation.getParam("id"));
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;
