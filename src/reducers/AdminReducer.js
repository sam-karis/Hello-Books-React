import {
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  EDIT_BOOK_SUCCESS
} from '../actions/constants';

const initialState = {
  Message: '',
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        Message: action.data.Message
      };
    case ADD_BOOK_FAIL:
      return {
        ...state,
        Message: action.data.Message
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        Message: action.data.Message
      };
    case DELETE_BOOK_FAIL:
      return {
        ...state,
        Message: action.data.Message
      };
    case EDIT_BOOK_SUCCESS:
      return {
        ...state,
        Message: action.data.Message
      };
    default:
      return { ...state };
  }
};
