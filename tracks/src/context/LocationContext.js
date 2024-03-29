import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case "addCurrentLocation":
      return {
        ...state,
        currentLocation: action.payload,
      };
    case "addLocation":
      return { ...state, locations: [...state.locations, action.payload] };
    case "triggerRecording":
      return {
        ...state,
        recording: action.payload,
      };
    case "changeName":
      return {
        ...state,
        name: action.payload,
      };
    case "reset":
      return {
        ...state,
        name: "",
        locations: [],
      };
    default:
      return state;
  }
};

const changeName = (dispatch) => (newName) => {
  dispatch({
    type: "changeName",
    payload: newName,
  });
};

const startRecording = (dispatch) => () => {
  dispatch({
    type: "triggerRecording",
    payload: true,
  });
};

const stopRecording = (dispatch) => () => {
  dispatch({
    type: "triggerRecording",
    payload: false,
  });
};

const addLocation = (dispatch) => (location, recording) => {
  console.log("LocationContext", location);
  dispatch({
    type: "addCurrentLocation",
    payload: location,
  });
  console.log("recording", recording);
  if (recording) {
    dispatch({
      type: "addLocation",
      payload: location,
    });
  }
};

const reset = (dispatch) => () => {
  dispatch({
    type: "reset",
  });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName,
    reset,
  },
  { name: "", recording: false, locations: [], currentLocation: null }
);
