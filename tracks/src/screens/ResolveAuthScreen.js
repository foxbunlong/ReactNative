import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    alignSelf: "center",
  },
});

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.loading}>Loading</Text>
    </View>
  );
};

export default ResolveAuthScreen;
