import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { Context as TrackContext } from '../context/TrackContext';

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

const TrackDetailScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state } = useContext(TrackContext);
  const track = state.find((item) => item._id === id);
  const initialCoords = track.locations[0].coords;
  return (
    <>
      <Text>TrackDetailScreen {track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((item) => item.coords)} />
      </MapView>
    </>
  );
};

export default TrackDetailScreen;
