import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMsg } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMsg}
        // onDidFocus={() => console.log("BBBBBB")}
        // onWillBlur={() => console.log("CCCCCC")}
        // onDidBlur={() => console.log('DDDDDD')}
      />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        submitBtnText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        title="Don't have an account? Sign up now"
        callback={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
