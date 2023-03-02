import { useContext } from "react";

import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import { navigate } from "../navigationRef";

// A handy pattern to integrate data from different contexts
export default () => {
  const { saveTracks } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await saveTracks(name, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};
