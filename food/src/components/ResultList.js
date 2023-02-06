import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { withNavigation } from "react-navigation";

import ResultDetail from "./ResultDetail";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 15,
    marginBottom: 5,
  },
});

const ResultList = ({ data, navigation }) => {
  console.log("data", data);

  const navigateToItem = (item) => {
    navigation.navigate("Result", { id: item.id });
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => navigateToItem(item)}>
        <ResultDetail item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {data && data.length > 0 ? data[0].category : ""}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

// Make ResultList has extra function to access navigation
export default withNavigation(ResultList);
