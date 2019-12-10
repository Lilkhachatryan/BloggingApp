import { LOGIN_REQUEST, LOGIN_SUCCESS, VERIFY_REQUEST, VERIFY_SUCCESS } from './actions';
import initialState from './_initialState.json';
import { userInfo } from 'os';

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
                user: action.user
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
        default: 
            return state;
    }
}