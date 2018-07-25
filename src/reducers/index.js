import auth from './AuthReducer';
import { books, book } from './BooksReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth,
  books,
  book
});
