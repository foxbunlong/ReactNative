import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import Map from '../components/Map';
import Spacer from '../components/Spacer';

const styles = StyleSheet.create({});

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h3>Create a Track</Text>
        <Map />
      </Spacer>
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
