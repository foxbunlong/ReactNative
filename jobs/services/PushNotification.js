import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native'; // Changed from redux-persist to react-native
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushtoken');
    if (previousToken) {
        console.log(previousToken);
        return;
    } else {
        console.log('==== Object null =====');
        let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

        if (status !== 'granted') {
            return;
        }

        let token = await Notifications.getExpoPushTokenAsync();
        await axios.post(PUSH_ENDPOINT, { token: { token } });
        AsyncStorage.setItem('pushtoken', token);
    }
};