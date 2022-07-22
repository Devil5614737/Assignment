import {
    FETCH_USERS_FAILED,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    SINGLE_USER_FAILED,
    SINGLE_USER_REQUEST,
    SINGLE_USER_SUCCESS
} from "../constants";

const initialState = {
    users:[]
}


export const fetchTheUser = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case FETCH_USERS_REQUEST:
            return {
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {loading:false,users:payload};
        case FETCH_USERS_FAILED:
            return {
                loading: false, error: payload
            };
        default:
            return state;
    }

}
export const fetchTheSingleUser = (state = {}, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case SINGLE_USER_REQUEST:
            return {
                loading: true
            };
        case SINGLE_USER_SUCCESS:
            return {loading:false,user:payload};
        case SINGLE_USER_FAILED:
            return {
                loading: false, error: payload
            };
        default:
            return state;
    }

}