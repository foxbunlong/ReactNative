import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "getList":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const response = await trackerApi.get("/tracks");
  dispatch({
    type: "getList",
    payload: response.data,
  });
};

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
