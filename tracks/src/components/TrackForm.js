import { useContext } from "react";
import { Button, Input } from "react-native-elements";

import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <Spacer>
      <Input placeholder="Enter name" value={name} onChangeText={changeName} />
      <Button
        title={recording ? "Stop tracking" : "Start tracking"}
        onPress={() => {
          recording ? stopRecording() : startRecording();
        }}
      />
      {!recording && locations.length ? (
        <Button title="Save route" onPress={saveTrack} />
      ) : null}
    </Spacer>
  );
};

export default TrackForm;
