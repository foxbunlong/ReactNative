import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Components"
        onPress={() => navigation.navigate("Components")}
      />
      <Button title="List" onPress={() => navigation.navigate("List")} />
      <Button title="Image" onPress={() => navigation.navigate("Image")} />
      <Button title="Counter" onPress={() => navigation.navigate("Counter")} />
      <Button title="Color" onPress={() => navigation.navigate("Color")} />
      <Button title="Square" onPress={() => navigation.navigate("Square")} />
      <Button title="Text" onPress={() => navigation.navigate("Text")} />
      <Button title="Box" onPress={() => navigation.navigate("Box")} />
      <Button title="Exercise" onPress={() => navigation.navigate("Exercise")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
