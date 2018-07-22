
import axios from 'axios';
import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import { api_url } from './../config';


export const register = (dispatch,data) => {
    const register_url = `${api_url}auth/register`
    axios.post(register_url, {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
        confirm_password: data.confirmPassword
    }).then(res => {
        const Message = res.data.Message;
        dispatch({type: 'REGISTER_SUCCESS', data: {Message}});
        swal(res.data.Message);
        browserHistory.push('/login')
    }).catch(error => {
        if (error.response.status === 406) {
            const Message = error.response.data.Message;
            dispatch({type: 'REGISTER_FAIL', data: {Message}});
            swal('NOT ACCEPTABLE', Message, 'error');
        }
        else if (error.response.status === 409) {
            const Message = error.response.data.Message;
            dispatch({type: 'REGISTER_FAIL', data: {Message}});
            swal('CONFLICT!!', Message, 'error');
        }
    });
}