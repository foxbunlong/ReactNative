import _ from 'lodash';
import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from '../actions/Types';

export default function (state = [], action) {
    switch (action.type) {
        case LIKE_JOB:
            // Prevent dublicated jobs
            // Add job liked by user to jobs added before
            return _.uniqBy([
                action.payload, ...state
            ], 'jobkey');

        case CLEAR_LIKED_JOBS:
            return [];
        default:
            return state;
    }
};