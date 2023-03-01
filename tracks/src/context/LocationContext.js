import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "addLocation":
      return {
        ...state,
        currentLocation: action.payload,
        // locations: [...state.locations, action.payload],
      };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {};

const stopRecording = (dispatch) => () => {};

const addLocation = (dispatch) => (location) => {
  console.log("LocationContext", location);
  dispatch({
    type: "addLocation",
    payload: location,
  });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
  },
  { recording: false, locations: [], currentLocation: null }
);
