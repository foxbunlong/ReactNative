import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  space: {
    margin: 8,
  },
});

const Spacer = ({ children }) => {
  return <View style={styles.space}>{children}</View>;
};

export default Spacer;
