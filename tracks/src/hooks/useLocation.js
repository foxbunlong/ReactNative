import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }

      // Force remove
      subscriber?.remove();
      setSubscriber(null);

      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
    } catch (error) {
      setErr(error);
    }
  };

  // Has a problem of not reload newest state.recording in LocationContext
  // Use useCallback instead
  useEffect(() => {
    console.log("shouldTrack", shouldTrack);
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }

    return () => {
      subscriber?.remove();
      setSubscriber(null);
    };
  }, [shouldTrack, callback]);

  return [err];
};
