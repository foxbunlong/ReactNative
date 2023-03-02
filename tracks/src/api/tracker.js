import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: "https://7f1d-118-69-224-65.ap.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    // Called everytime make new request
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => {
    // Called everytime has an error
    return Promise.reject(err);
  }
);

export default instance;
