import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";

import Spacer from "./Spacer";

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: "red",
  },
});

const AuthForm = ({ headerText, errorMessage, onSubmit, submitBtnText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage ? (
        <Spacer>
          <Text style={styles.error}>{errorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button
          title={submitBtnText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

export default AuthForm;
