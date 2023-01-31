import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const COLOR_INCREMENT = 10;

// alignItems and flexDirection has 2 opposite effects
// justifyContent and flexDirection has same directional effects
// alignSelf effect on child
// top, bottom, left, right added to UI after everything displayed on screen

const styles = StyleSheet.create({
  viewStyle1: {
    height: 200,
    margin: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  textStyle1: {
    borderWidth: 1,
    borderColor: "blue",
    marginHorizontal: 20,
    flex: 1,
  },
  textStyle2: {
    borderWidth: 1,
    borderColor: "blue",
    marginHorizontal: 20,
    marginTop: 30,
    flex: 1,
  },
});

const ExerciseScreen = () => {
  return (
    <ScrollView>
      <View style={styles.viewStyle1}>
        <Text style={styles.textStyle1}>Box 1</Text>
        <Text style={styles.textStyle2}>Box 2</Text>
        <Text style={styles.textStyle1}>Box 3</Text>
      </View>
    </ScrollView>
  );
};

export default ExerciseScreen;
