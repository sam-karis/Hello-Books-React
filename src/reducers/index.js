import auth from './AuthReducer';
import { books, book } from './BooksReducer';
import admin from './AdminReducer';
import history from './BorrowHistoryReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth,
  admin,
  books,
  book,
  history
});
