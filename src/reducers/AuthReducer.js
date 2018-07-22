
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/constants';

const initialState = {
    Message: '',
    loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
    username: localStorage.getItem('username'),
    access_token: localStorage.getItem('access_token'),
    email: localStorage.getItem('email'),
    isAdmin: JSON.parse(localStorage.getItem('isAdmin')),
    error: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                access_token: action.data.access_token,
                username: action.data.username,
                email: action.data.email,
                isAdmin: action.data.isAdmin,
                Message: 'Logged in successfully'
            }
        case LOGIN_FAIL:
            return {
                ...state,
                Message: action.data.Message,
                loggedIn: false,
                error: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                Message: 'Logged out Successfully',
                access_token: null,
                username: null,
                email: null,
                isAdmin: null,
                loggedIn: false,
                error: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                Message: action.data.Message
            }
        case REGISTER_FAIL:
            return {
                ...state,
                Message: action.data.Message
            }
        default:
            return { ...state }
    }
}