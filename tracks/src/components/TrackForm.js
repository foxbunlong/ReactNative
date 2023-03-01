import { useContext } from "react";
import { Button, Input } from "react-native-elements";

import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";

const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } =
    useContext(LocationContext);

  console.log(state.locations.length);

  return (
    <Spacer>
      <Input
        placeholder="Enter name"
        defaultValue={state.name}
        onChangeText={changeName}
      />
      <Button
        title={state.recording ? "Stop tracking" : "Start tracking"}
        onPress={() => {
          state.recording ? stopRecording() : startRecording();
        }}
      />
    </Spacer>
  );
};

export default TrackForm;
