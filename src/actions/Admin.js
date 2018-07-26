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
