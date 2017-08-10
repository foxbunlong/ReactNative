import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
        // {} is initial state we wanna pass into store
        // 3rd element is store enhancer
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;
