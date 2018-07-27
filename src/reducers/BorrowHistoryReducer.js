import {
  BORROW_HISTORY_SUCCESS,
  BORROW_HISTORY_FAIL
} from '../actions/constants';

const initialState = {
  Message: '',
  history: [],
  error: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case BORROW_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.data,
        error: false
      };
    case BORROW_HISTORY_FAIL:
      return {
        ...state,
        Message: action.data.Message,
        error: true,
        history: []
      };
    default:
      return { ...state };
  }
};
