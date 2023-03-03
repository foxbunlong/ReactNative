import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text style={styles.title}>AccountScreen</Text>
        <Button title="Logout" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    title: "Account",
    tabBarIcon: <FontAwesome name="gear" size={20} color={"white"} />,
  };
};

export default AccountScreen;
