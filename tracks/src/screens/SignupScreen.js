import Constants from "expo-constants";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
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
});

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMsg } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMsg}
        // onDidFocus={() => console.log("BBBBBB")}
        // onWillBlur={() => console.log("CCCCCC")}
        // onDidBlur={() => console.log('DDDDDD')}
      />
      <AuthForm
        headerText="Sign Up for Tracker 1"
        errorMessage={state.errorMessage}
        submitBtnText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        title="Already have an account? Signin now"
        callback={() => navigation.navigate("Signin")}
      />
      <Spacer>
        <Text>Version {Constants.manifest.version}</Text>
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
