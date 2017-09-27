import { combineReducers } from 'redux';
import auth from './AuthReducer';
import jobs from './JobReducer';

export default combineReducers({
    auth, jobs // ES6
});
