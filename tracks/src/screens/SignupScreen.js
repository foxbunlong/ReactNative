import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

// justifyContent - applied for the same direction of container - primary axis
// alignItems - applied for the other direction - secondary axis

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  error: {
    fontSize: 16,
    color: "red",
  },
});

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChangeText={setPassword}
      />
      {state.errorMessage ? (
        <Spacer>
          <Text style={styles.error}>{state.errorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
    // header: null, // Alternative - depreciated
  };
};

export default SignupScreen;
