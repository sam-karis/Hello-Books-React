import axios from 'axios';
import swal from 'sweetalert';
import { api_url } from './../config';

const getAllBooks = () => {
  return dispatch => {
    const all_books_url = `${api_url}books`;
    return axios
      .get(all_books_url)
      .then(res => {
        const books = res.data.books;
        dispatch({ type: 'GET_ALL_BOOKS_SUCCESS', data: { books } });
      })
      .catch(error => {
        if (error.response.status === 204) {
          const message = error.response.data.Message;
          swal('Error!!', message, 'error');
        }
      });
  };
};

const getSingleBook = id => {
  const single_book_url = `${api_url}books/${id}`;
  return dispatch => {
    return axios
      .get(single_book_url)
      .then(res => {
        const book = res.data;
        if (res.data.status === 204) {
          const Message = res.data.Message;
          return dispatch({ type: 'GET_ONE_BOOK_FAIL', data: Message });
        }
        dispatch({ type: 'GET_ONE_BOOK_SUCCESS', data: book });
      })
      .catch(error => {
        if (error.response.status === 404) {
          const Message = error.response.data.Message;
          return dispatch({ type: 'GET_ONE_BOOK_FAIL', data: Message });
        }
      });
  };
};

export { getAllBooks, getSingleBook };
