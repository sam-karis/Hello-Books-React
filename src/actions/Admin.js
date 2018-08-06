import axios from 'axios';
import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import { api_url, request_header } from './../config';
import { logout } from '../actions/Logout';

export const addBook = data => {
  return dispatch => {
    const add_book_url = `${api_url}books`;
    return axios
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
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          swal(Message);
          dispatch(
            logout({ email: data.email, access_token: data.access_token })
          );
        }
        if (error.response.status === 409) {
          const Message = error.response.data.Message;
          dispatch({ type: 'ADD_BOOK_FAIL', data: { Message } });
        }
      });
  };
};

export const editBook = data => {
  return dispatch => {
    const edit_book_url = `${api_url}books/${data.book_id}`;
    return axios
      .put(
        edit_book_url,
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
        dispatch({ type: 'EDIT_BOOK_SUCCESS', data: { Message } });
        swal(res.data.Message);
        browserHistory.push(`/books/${data.book_id}`);
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          swal(Message);
          dispatch(
            logout({ email: data.email, access_token: data.access_token })
          );
        }
      });
  };
};

export const deleteBook = data => {
  return dispatch => {
    const delete_book_url = `${api_url}books/${data.book_id}`;
    return axios
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
        if (error.response.status === 409) {
          const Message = error.response.data.Message;
          swal(Message);
        }
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          swal(Message);
          dispatch(
            logout({ email: data.email, access_token: data.access_token })
          );
        }
      });
  };
};
