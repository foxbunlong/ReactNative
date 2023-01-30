import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({});

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`+ ${color}`} onPress={onIncrease}></Button>
      <Button title={`- ${color}`} onPress={onDecrease}></Button>
    </View>
  );
};

export default ColorCounter;
