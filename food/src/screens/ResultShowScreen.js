import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({});

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default ResultShowScreen;
