import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

const ResultDetail = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.imageURL }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.rewardRate} Reviews</Text>
    </View>
  );
};

export default ResultDetail;
