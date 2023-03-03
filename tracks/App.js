import {
  checkForUpdateAsync,
  fetchUpdateAsync,
  reloadAsync,
} from "expo-updates";
import { useEffect } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { FontAwesome } from "@expo/vector-icons";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRef";
import AccountScreen from "./src/screens/AccountScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

trackListFlow.navigationOptions = () => {
  return {
    title: "Tracks",
    tabBarIcon: <FontAwesome name="th-list" size={20} color={"white"} />,
  };
};

// Switch navigator to navigate based on user session
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);
export default () => {
  const checkUpdate = async () => {
    try {
      const update = await checkForUpdateAsync();
      if (update.isAvailable) {
        await fetchUpdateAsync();
        // ... notify user of update ...
        reloadAsync();
      }
    } catch (e) {
      // handle or log error
    }
  };

  useEffect(() => {
    checkUpdate();
  }, []);

  return (
    <AuthProvider>
      <LocationProvider>
        <TrackProvider>
          <App
            ref={(navigation) => {
              setNavigator(navigation);
            }}
          />
        </TrackProvider>
      </LocationProvider>
    </AuthProvider>
  );
};
