import { FlatList, StyleSheet, Text, View } from 'react-native';

import ResultDetail from './ResultDetail';

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

const ResultList = ({ data }) => {
  console.log("data", data);

  const renderItem = (item) => {
    return <ResultDetail item={item} />;
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

export default ResultList;
