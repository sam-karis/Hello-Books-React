import axios from 'axios';
import swal from 'sweetalert';
import { api_url, request_header} from './../config';
import { getSingleBook } from '../actions/Books';
import { logout } from '../actions/Logout';

const borrowBook = data => {
  return dispatch => {
    const borrow_url = `${api_url}users/books/${data.book_id}`;
    return axios
      .post(
        borrow_url,
        { email: data.email },
        { headers: request_header(data.access_token) }
      )
      .then(res => {
        const borrowBook = res.data;
        const Message = res.data.Message;
        dispatch({ type: 'BORROW_BOOK_SUCCESS', data: { borrowBook } });
        dispatch(getSingleBook(data.book_id));
        swal(Message);
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

const returnBook = data => {
  return dispatch => {
    const return_url = `${api_url}users/books/${data.book_id}`;
    return axios
      .put(
        return_url,
        { email: data.email },
        { headers: request_header(data.access_token) }
      )
      .then(res => {
        const returnBook = res.data;
        const Message = res.data.Message;
        dispatch({ type: 'RETURN_BOOK_SUCCESS', data: { returnBook } });
        dispatch(getSingleBook(data.book_id));
        swal(Message);
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          swal(Message);
          dispatch(
            logout({ email: data.email, access_token: data.access_token })
          );
        } else if (error.response.status === 400) {
          const Message = error.response.data.Message;
          swal(Message);
        }
      });
  };
};

export { borrowBook, returnBook };
