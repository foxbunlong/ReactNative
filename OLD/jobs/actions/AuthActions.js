import { AsyncStorage } from 'react-native';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './Types';
import { Facebook } from 'expo';

// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
        // Dispatch an act saying that FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        // Start FB login
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    // result has type and token properties
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('142894229652673', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        // wrong password, cancel input
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
