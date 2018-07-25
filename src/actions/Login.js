import axios from 'axios';
import { browserHistory } from 'react-router';
import { api_url } from './../config';

export const login = (dispatch, data) => {
  const login_url = `${api_url}auth/login`;
  axios
    .post(login_url, {
      email: data.email,
      password: data.password
    })
    .then(res => {
      const access_token = res.data.access_token;
      const username = res.data.username;
      const email = res.data.email;
      const isAdmin = res.data.is_admin;
      localStorage.setItem('email', email);
      localStorage.setItem('username', username);
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('isAdmin', isAdmin);
      localStorage.setItem('loggedIn', true);
      dispatch({
        type: 'LOGIN_SUCCESS',
        data: {
          access_token,
          username,
          email,
          isAdmin
        }
      });
      browserHistory.push('/books');
    })
    .catch(error => {
      if (error.response.status === 401) {
        const Message = error.response.data.Message;
        dispatch({ type: 'LOGIN_FAIL', data: { Message } });
      }
    });
};
