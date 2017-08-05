import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
    return (
        // Translate anything inside store to something can be used in react side
        <Provider store={createStore(reducers)}>
            <View />
        </Provider>
    );
}

export default App;
