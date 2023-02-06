import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const styles = StyleSheet.create({});

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  const filterResultsByCategory = (cateIndex) => {
    const distintCategories = Array.from(
      new Map(results.map((item) => [item.category, item])).values()
    );

    return results.filter((result) => {
      return result.category === distintCategories[cateIndex].category;
    });
  };

  // Placeholder (Empty element) will prevent the view to run out of the edge. Same as <View style={{flex: 1}} ></View>
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultList data={filterResultsByCategory(0)} navigation={navigation} />
        <ResultList data={filterResultsByCategory(1)} navigation={navigation} />
        <ResultList data={filterResultsByCategory(2)} navigation={navigation} />
        <ResultList data={filterResultsByCategory(3)} navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
