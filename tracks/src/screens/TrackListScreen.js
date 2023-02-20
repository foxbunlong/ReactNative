import { Button, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.title}>TrackListScreen</Text>
      <Button
        title="Track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

export default TrackListScreen;
