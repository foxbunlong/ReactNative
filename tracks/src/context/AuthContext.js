import AsyncStorage from "@react-native-async-storage/async-storage";

import trackerApi from "../api/tracker";
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

    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    // Make request
    console.log(email, password);
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
    } catch (error) {
      dispatch({
        type: "addError",
        payload: "Something went wrong with signup",
      });
    }
  };

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Make login request
  };
};

const signout = (dispatch) => {
  return () => {
    // Clear identical data
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
