import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/Types';

const INIT_STATE = {

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            console.log(action);
            return action.payload;
        default:
            return state;
    }
};
