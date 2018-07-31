import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory } from 'react-router';
import { api_url, request_header} from './../config';
import { logout } from '../actions/Logout';


/**
 * Get a user borrowing history
 * @returns{Object} - Books and time when borrowed/returned
 */
export const getBorrowHistory = data => {
  return dispatch => {
    const borrow_history_url = `${api_url}users/books`;
    return axios
      .get(borrow_history_url, { headers: request_header(data.access_token) })
      .then(res => {
        if(res.data.status === 204){
          const Message = res.data.Message;
          return dispatch({ type: 'BORROW_HISTORY_FAIL', data: { Message } });
        }
        const history = res.data.books;
        dispatch({ type: 'BORROW_HISTORY_SUCCESS', data: history });
      })
      .catch(error => {
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          swal(Message);
          dispatch(
            logout({ email: data.email, access_token: data.access_token })
          );
          browserHistory.push('/login');
        }
      });
  };
};
