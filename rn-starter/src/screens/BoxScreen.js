import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const COLOR_INCREMENT = 10;

// alignItems and flexDirection has 2 opposite effects
// justifyContent and flexDirection has same directional effects
// alignSelf effect on child
// top, bottom, left, right added to UI after everything displayed on screen

const styles = StyleSheet.create({
  viewStyle1: {
    height: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "space-evenly",
  },
  textStyle1: {
    borderWidth: 1,
    borderColor: "blue",
    marginHorizontal: 20,
  },
  viewStyle2: {
    height: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textStyle2: {
    borderWidth: 1,
    borderColor: "blue",
    marginVertical: 10,
  },
  viewStyle3: {
    height: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
  },
  textStyle3: {
    borderWidth: 1,
    borderColor: "blue",
    marginHorizontal: 20,
  },
  textStyle3WithFlex: {
    borderWidth: 1,
    borderColor: "blue",
    marginHorizontal: 20,
    flex: 1,
    alignSelf: "flex-start",
  },
  textStyle3WithAbsolute: {
    borderWidth: 1,
    borderColor: "blue",
    marginHorizontal: 20,
    position: "absolute",
  },
  textStyle3WithTop: {
    borderWidth: 1,
    borderColor: "blue",
    marginHorizontal: 20,
    top: 10,
  },
  textStyle3FillScreen: {
    borderWidth: 1,
    borderColor: "blue",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  textStyle3FillScreen2: {
    borderWidth: 1,
    borderColor: "blue",
    ...StyleSheet.absoluteFillObject,
  },
});

const BoxScreen = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.viewStyle1}>
          <Text style={styles.textStyle1}>Box 1</Text>
          <Text style={styles.textStyle1}>Box 2</Text>
          <Text style={styles.textStyle1}>Box 3</Text>
        </View>
        <View style={styles.viewStyle2}>
          <Text style={styles.textStyle2}>Box 1</Text>
          <Text style={styles.textStyle2}>Box 2</Text>
          <Text style={styles.textStyle2}>Box 3</Text>
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.textStyle3}>Box 1</Text>
          <Text style={styles.textStyle3WithFlex}>Box 2</Text>
          <Text style={styles.textStyle3}>Box 3</Text>
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.textStyle3}>Box 1</Text>
          <Text style={styles.textStyle3WithAbsolute}>Box 2</Text>
          <Text style={styles.textStyle3}>Box 3</Text>
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.textStyle3}>Box 1</Text>
          <Text style={styles.textStyle3WithTop}>Box 2</Text>
          <Text style={styles.textStyle3}>Box 3</Text>
        </View>
        <View style={styles.viewStyle3}>
          <Text style={styles.textStyle3}>Box 1</Text>
          <Text style={styles.textStyle3FillScreen2}>Box 2</Text>
          <Text style={styles.textStyle3}>Box 3</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BoxScreen;
