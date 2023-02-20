import trackerApi from '../api/tracker';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case "addError":
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return false;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // Make request
    console.log(email, password);
    try {
      const resp = await trackerApi.post("/signup", {
        email,
        password,
      });
      console.log("resp", resp.data);
    } catch (error) {
      dispatch({
        type: "addError",
        payload: "Something went wrong with signup",
      });
    }
  };
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
  { isSignedIn: false, errorMessage: "" }
);
