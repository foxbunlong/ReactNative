import { StyleSheet, TextInput, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
  background: {
    height: 50,
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginVertical: 10,
    // alignItems: "center", // This will limit amount of space to focus inputtext
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  searchText: {
    fontSize: 18,
    flex: 1,
  },
});

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        style={styles.searchText}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;
