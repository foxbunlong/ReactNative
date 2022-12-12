import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends Component {

    componentDidMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyBTcIijLReUVA17s7gwqsKR90xDOtp1JEs",
            authDomain: "one-time-password-e3a68.firebaseapp.com",
            databaseURL: "https://one-time-password-e3a68.firebaseio.com",
            projectId: "one-time-password-e3a68",
            storageBucket: "one-time-password-e3a68.appspot.com",
            messagingSenderId: "871815415118"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View style={styles.container}>
                <SignUpForm />
                <SignInForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('firebase_auth', () => App);
