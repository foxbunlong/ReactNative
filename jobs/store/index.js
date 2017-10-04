import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
);

// Every time state is changed, store all new pieces of state here, especially care about likedJobs
persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });

export default store;