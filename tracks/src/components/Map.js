import { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle } from "react-native-maps";

import { Context as LocationContext } from "../context/LocationContext";

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158,225,1.0)"
        fillColor="rgba(158, 158,225,0.3)"
      />
      {/* <Polyline coordinates={points} /> */}
    </MapView>
  );
};

export default Map;
