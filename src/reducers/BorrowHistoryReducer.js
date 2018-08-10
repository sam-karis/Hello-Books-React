import {
  BORROW_HISTORY_SUCCESS,
  BORROW_HISTORY_FAIL,
  BORROW_HISTORY_FETCH
} from '../actions/constants';

const initialState = {
  Message: '',
  history: [],
  error: false,
  fetching: false
};

/**
 * Borrowing history related Reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case BORROW_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.data,
        error: false,
        fetching: false
      };
    case BORROW_HISTORY_FETCH:
      return {
        ...state,
        history: [],
        error: false,
        fetching: true
      };
    case BORROW_HISTORY_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true,
        history: [],
        fetching: false
      };
    default:
      return { ...state };
  }
};
