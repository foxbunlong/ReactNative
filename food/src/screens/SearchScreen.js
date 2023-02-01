import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const styles = StyleSheet.create({});

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{errorMsg.length > 0 ? errorMsg : "Search results"}</Text>
      <Text>Found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;
