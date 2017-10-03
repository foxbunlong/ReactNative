import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        },
          // Fix for Sub section
          {
            tabBarPosition: 'bottom',
            lazy: true,
            swipeEnabled: false,
            animationEnabled: false,
            tabBarOptions: {
              labelStyle: { fontSize: 12 },
              showIcon: true,
              iconStyle: {
                width: 30,
                height: 30
              }
            },
            tabBarVisible: false // Fix Facebook login form not showing up
          })
      }
    },
      // Fix for Main section
      {
        //tabBarPosition: 'bottom',
        navigationOptions: {
          tabBarVisible: false
        },
        lazy: true,
        swipeEnabled: true,
        animationEnabled: false, // Fix navigation to Map screen
        tabBarVisible: false // Fix Facebook login form not showing up
      }
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
});
