import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/Types';

const INIT_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // [ ] is Key Interpolation. 
            // action.payload.prop can be replaced by any kind of key
            return { ...state, [action.payload.prop]: action.payload.value };

        case EMPLOYEE_CREATE:
            return INIT_STATE;

        case EMPLOYEE_SAVE_SUCCESS:
            return INIT_STATE;

        default:
            return state;
    }
};
