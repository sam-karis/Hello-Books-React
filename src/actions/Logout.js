import axios from 'axios';
import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import { api_url, request_header } from './../config';

const clearUser = () => {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('isAdmin');
  localStorage.removeItem('access_token');
};

export const logout = (dispatch, data) => {
  const logout_url = `${api_url}auth/logout`;
  axios
    .post(
      logout_url,
      { email: data.email },
      { headers: request_header(data.access_token) }
    )
    .then(res => {
      const Message = res.data.Message;
      clearUser();
      dispatch({ type: 'LOGOUT_SUCCESS', data: { Message } });
      swal(Message);
      browserHistory.push('/login');
    })
    .catch(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' });
      clearUser();
      browserHistory.push('/login');
    });
};
