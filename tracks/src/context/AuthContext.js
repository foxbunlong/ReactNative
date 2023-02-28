import AsyncStorage from "@react-native-async-storage/async-storage";

import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "addError":
      return {
        ...state,
        errorMessage: action.payload,
      };

    case "updateToken":
      return {
        errorMessage: "",
        token: action.payload,
      };

    case "clearError":
      return {
        ...state,
        errorMessage: "",
      };

    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: "updateToken",
      payload: token,
    });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const clearErrorMsg = (dispatch) => () => {
  dispatch({
    type: "clearError",
  });
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    // Make request
    try {
      const resp = await trackerApi.post("/signup", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", resp.data.token);
      dispatch({
        type: "updateToken",
        payload: resp.data.token,
      });

      navigate("mainFlow");
    } catch (error) {
      dispatch({
        type: "addError",
        payload: "Something went wrong with signup",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    // Make login request
    try {
      const resp = await trackerApi.post("/signin", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", resp.data.token);
      dispatch({
        type: "updateToken",
        payload: resp.data.token,
      });

      navigate("mainFlow");
    } catch (error) {
      dispatch({
        type: "addError",
        payload: "Something went wrong with signin",
      });
    }
  };

const signout = (dispatch) => {
  return async () => {
    // Clear identical data
    await AsyncStorage.removeItem("token");
    navigate("loginFlow");
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMsg, tryLocalSignin },
  { token: null, errorMessage: "" }
);
