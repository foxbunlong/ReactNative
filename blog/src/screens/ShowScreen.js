import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const styles = StyleSheet.create({});

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((item) => item.id === navigation.getParam("id"));
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
