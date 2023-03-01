// Use below script to simulate the navigation if GPS cannot work properly
// This might happen on simulator
// import "../_mockLocation";

import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import Map from "../components/Map";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const styles = StyleSheet.create({});

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h3>Create a Track</Text>
        <Map />
        {err ? <Text>Please enable location service</Text> : null}
      </Spacer>
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
