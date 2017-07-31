import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB1JpqsovByPR15mR-Q7-H7snCZg_Pxa-0',
            authDomain: 'auth-54906.firebaseapp.com',
            databaseURL: 'https://auth-54906.firebaseio.com',
            projectId: 'auth-54906',
            storageBucket: 'auth-54906.appspot.com',
            messagingSenderId: '383047585862'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
