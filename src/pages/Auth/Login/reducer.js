import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS
} from './actions';
import {
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "../Register/action";
import initialState from './_initialState.json';

export default (state = initialState, action) => {
    const {
        payload,
        type,
    } = action;

    switch (type) {
        case LOGIN_REQUEST: 
            return {
                ...state,
                isLoggingIn: true,
                loginError: false
             };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: payload
            };
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
                logoutError: false,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isAuthenticated: false,
                user: {}
            };
        case REGISTER_SUCCESS:
            console.log("payload", payload);
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: payload
            };
        default: 
            return state;
    }
}