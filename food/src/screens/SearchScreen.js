import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import dataService from "../api/DataService";
import SearchBar from "../components/SearchBar";

const styles = StyleSheet.create({});

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (term) => {
    setResults([]);
    setErrorMsg("");
    try {
      const response = await dataService.get("/highlight-stores");
      setResults(response.data.data.data);
    } catch (error) {
      console.log(error);
      setErrorMsg("Something wrong");
    }
  };

  // 1st load
  useEffect(() => {
    searchApi("pasta");
  }, []);

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
