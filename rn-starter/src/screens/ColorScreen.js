import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const ColorScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);

  const generateColors = () => {
    const newColors = [...colors, randomRGB()];
    setColors(newColors);
  };

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const colorCode = `rgb(${red},${green},${blue})`;
    console.log("colorCode", colorCode);
    return colorCode;
  };

  const colorCell = ({ item }) => {
    return (
      <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
    );
  };

  return (
    <View>
      <Text style={styles.text}>Colors</Text>
      <Button title="Add a color" onPress={generateColors} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        numColumns={4}
        renderItem={colorCell}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColorScreen;
