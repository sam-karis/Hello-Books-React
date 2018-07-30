import {
  BORROW_BOOK_SUCCESS,
  BORROW_BOOK_FAIL,
  RETURN_BOOK_SUCCESS,
  RETURN_BOOK_FAIL
} from '../actions/constants';

const initialState = {
  Message: '',
  error: false
};
const borrowBook = (state = initialState, action) => {
  switch (action.type) {
    case BORROW_BOOK_SUCCESS:
      return {
        ...state,
        Message: action.data.Message,
        borrowedBook: action.data,
        error: false
      };
    case BORROW_BOOK_FAIL:
      return {
        ...state,
        error: true,
        Message: action.data.Message
      };
    default:
      return { ...state };
  }
};

const returnBook = (state = initialState, action) => {
  switch (action.type) {
    case RETURN_BOOK_SUCCESS:
      return {
        ...state,
        Message: action.data.Message,
        returnedBook: action.data,
        error: false
      };
    case RETURN_BOOK_FAIL:
      return {
        ...state,
        error: true,
        Message: action.data.Message
      };
    default:
      return { ...state };
  }
};

export { borrowBook, returnBook };
