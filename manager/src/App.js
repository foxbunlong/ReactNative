import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAdwO19xf1M11aYwlHKQjJ4S9avZUI7AGE",
            authDomain: "manager-44633.firebaseapp.com",
            databaseURL: "https://manager-44633.firebaseio.com",
            projectId: "manager-44633",
            storageBucket: "manager-44633.appspot.com",
            messagingSenderId: "664951933162"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;
