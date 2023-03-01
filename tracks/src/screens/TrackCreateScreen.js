// Use below script to simulate the navigation if GPS cannot work properly
// This might happen on simulator
// import "../_mockLocation";

import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

import Map from '../components/Map';
import Spacer from '../components/Spacer';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const styles = StyleSheet.create({});

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);

  // Equivalent to
  // (location) => {
  //   addLocation(location);
  // }
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  });

  // <NavigationEvents
  //   onWillBlur={() => {
  //     console.log("AAAAAAA");
  //   }}
  // />

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h3>Create a Track</Text>
        <Map />
        {err ? <Text>Please enable location service</Text> : null}
        <TrackForm />
      </Spacer>
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);
