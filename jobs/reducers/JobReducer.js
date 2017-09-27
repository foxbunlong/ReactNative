import { FETCH_JOBS } from '../actions/Types';

const INIT_STATE = {
    results: []
};

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case FETCH_JOBS:
            return action.payload;
        default:
            return state;
    }
}