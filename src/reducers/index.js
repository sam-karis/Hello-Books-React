import {auth, passwordReset} from './AuthReducer';
import { books, book } from './BooksReducer';
import admin from './AdminReducer';
import history from './BorrowHistoryReducer';
import {borrowBook, returnBook} from './BorrowReturnReducer';
import { combineReducers } from 'redux';

/**
 * Combine and export all Reducer
 */
export default combineReducers({
  auth,
  admin,
  books,
  book,
  history,
  borrowBook,
  returnBook,
  passwordReset
});
