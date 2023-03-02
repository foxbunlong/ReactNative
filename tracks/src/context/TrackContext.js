import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};

const saveTracks = (dispatch) => async (name, locations) => {
  console.log("name", name);
  console.log("locations", locations);
  await trackerApi.post("/tracks", {
    name,
    locations,
  });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, saveTracks },
  []
);
