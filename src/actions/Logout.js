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

export const logout = data => {
  return dispatch => {
    const logout_url = `${api_url}auth/logout`;
    return axios
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
      .catch(error => {
        if (error.response.status === 401) {
          const Message = 'session expired login to continue';
          dispatch({ type: 'LOGOUT_SUCCESS', data: { Message }  });
          clearUser();
          browserHistory.push('/login');
        }
      });
  };
};
