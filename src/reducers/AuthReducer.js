import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REQUEST_RESET_SUCCESS,
  REQUEST_RESET_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL
} from '../actions/constants';

const initialState = {
  Message: '',
  loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
  username: localStorage.getItem('username'),
  access_token: localStorage.getItem('access_token'),
  email: localStorage.getItem('email'),
  isAdmin: JSON.parse(localStorage.getItem('isAdmin')),
  error: null
};

const resetInitialState = {
  error: null,
  email: localStorage.getItem('resetEmail'),
  token: localStorage.getItem('resetToken')
};

/**
 * Authentication Reducer
 */
const auth = (state = initialState, action) => {
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
      };
    case LOGIN_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        loggedIn: false,
        error: true
      };
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
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        Message: action.data.Message
      };
    case REGISTER_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true
      };
    default:
      return { ...state };
  }
};

/**
 * Password Reset Reducer
 */
const passwordReset = (state = resetInitialState, action) => {
  switch (action.type) {
    case REQUEST_RESET_SUCCESS:
      return {
        ...state,
        Message: action.data.Message
      };
    case REQUEST_RESET_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        Message: action.data.Message,
        email: null
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true
      };
    default:
      return { ...state };
  }
};

export { auth, passwordReset };
