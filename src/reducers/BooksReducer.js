import {
  GET_ALL_BOOKS_SUCCESS,
  GET_ONE_BOOK_SUCCESS,
  GET_ONE_BOOK_FAIL,
  FETCHING_BOOKS
} from '../actions/constants';

const initialState = {
  books: [],
  pageLoading: false
};
const SingleInitialState = {
  book: {}
};
const books = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BOOKS:
      return {
        ...state,
        pageLoading: true
      };
    case GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.data.books,
        pageLoading: false
      };
    default:
      return { ...state };
  }
};

const book = (state = SingleInitialState, action) => {
  switch (action.type) {
    case GET_ONE_BOOK_SUCCESS:
      return {
        ...state,
        book: action.data,
        fetching: false,
        error: false
      };
    case GET_ONE_BOOK_FAIL:
      return {
        ...state,
        book: {},
        fetching: false,
        error: true,
        Message: action.data
      };
    default:
      return { ...state };
  }
};

export { books, book };
