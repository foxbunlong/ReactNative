import { useEffect, useState } from "react";

import dataService from "../api/DataService";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (term) => {
    console.log("CALL searchApi");
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

  return [searchApi, results, errorMsg];
};
