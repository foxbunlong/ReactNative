import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const styles = StyleSheet.create({});

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;

      case "green":
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        break;

      case "blue":
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        break;

      default:
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
