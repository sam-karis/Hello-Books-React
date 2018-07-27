import axios from 'axios';
import { api_url, request_header } from './../config';

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
      .catch(() => {
        const Message = 'No history';
        dispatch({ type: 'BORROW_HISTORY_FAIL', data: { Message } });
      });
  };
};
