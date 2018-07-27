import axios from 'axios';
import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import { api_url, request_header } from './../config';

export const addBook = (dispatch, data) => {
  const add_book_url = `${api_url}books`;
  axios
    .post(
      add_book_url,
      {
        title: data.title,
        author: data.author,
        edition: data.edition,
        description: data.description
      },
      { headers: request_header(data.access_token) }
    )
    .then(res => {
      const Message = res.data.Message;
      dispatch({ type: 'ADD_BOOK_SUCCESS', data: { Message } });
      swal(res.data.Message);
      browserHistory.push('/books');
    })
    .catch(error => {
      const Message = error.response.data.Message;
      dispatch({ type: 'ADD_BOOK_FAIL', data: { Message } });
      swal('NOT ACCEPTABLE', Message, 'error');
    });
};

export const deleteBook = (data) => {
  return dispatch => {
    const delete_book_url = `${api_url}books/${data.book_id}`;
    axios
      .delete(delete_book_url, { headers: request_header(data.access_token) })
      .then(res => {
        const Message = res.data.Message;
        if (res.data.status === 204) {
          const Message = res.data.Message;
          return dispatch({ type: 'DELETE_BOOK_SUCCESS', data: { Message } });
        }
        dispatch({ type: 'DELETE_BOOK_SUCCESS', data: { Message } });
        swal(Message);
        browserHistory.push('/books');
      })
      .catch(error => {
        const Message = 'Your session has expired login to continue!';
        if (error.response.status === 404) {
          dispatch({ type: 'DELETE_BOOK_FAIL', data: { Message } });
          browserHistory.push('login');
        }
        swal('NOT ACCEPTABLE', Message, 'error');
      });
  };
};
