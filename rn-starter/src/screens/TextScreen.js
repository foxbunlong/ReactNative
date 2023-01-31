import React, { useReducer } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const COLOR_INCREMENT = 10;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});

const reducer = (state, action) => {
  switch (action.type) {
    case "change_text":
      return { ...state, textInput: action.payload };

    default:
      return state;
  }
};

const TextScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    textInput: "",
  });

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) =>
          dispatch({ type: "change_text", payload: text })
        }
      />
      <Text>{state.textInput}</Text>
      {state.textInput.length < 5 ? <Text>Not long enough</Text> : null}
    </View>
  );
};

export default TextScreen;
