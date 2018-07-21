import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Form, Label, Input, Alert } from 'reactstrap';
import {login} from '../actions/Login';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            visible: true
        }
    }

    _onDismiss = () => {
        this.setState({
            visible : false
        });
    }

    _login = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        this.props.login({email,password});
        this.forceUpdate();
    }

    render() {
        return (
            <div className='loginform'>
                <h1>Login</h1>
                <p>Enter you credentials to login.</p>
                <hr />
                {this.props.auth.error?
                    <Alert isOpen={this.state.visible}
                        color='danger'
                        toggle={this._onDismiss}>
                        {this.props.auth.Message}
                    </Alert> : null}
                <Form onSubmit={this._login}>
                    <div className='form-group'>
                        <Label for="exampleEmail"><b>Email</b></Label>
                        <Input type="email" name="email" placeholder="name@example.com" required autoComplete='email' />
                    </div >
                    <div className='form-group'>
                        <Label for="examplePassword"><b>Password</b></Label>
                        <Input type="password" name="password" placeholder="password" />
                    </div>
                    <div className='form-group'>
                        <Button type='submit' id='submit'>
                            Login
                    </Button>
                    </div><br /><br />
                    <div>
                        <span className="psw"><a href="/">Forgot password?</a></span>
                    </div>
                </Form >

            </div>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();
    };

}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (data) => login(dispatch,data)
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);