import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

import Spacer from '../components/Spacer';

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
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" onPress={() => navigation.navigate("Signin")} />
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
