import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CounterScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={styles.text}>Current Count: {count}</Text>
      <Button onPress={() => setCount(count + 1)} title="+" />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterScreen;
