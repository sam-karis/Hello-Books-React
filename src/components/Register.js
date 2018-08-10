import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, Label, Input, Alert } from 'reactstrap';
import { register } from '../actions/Register';
import { loader } from './../config';

/**
 * This component render sign up page
 */
class Register extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }

  /**
   * The function closes the alert box
   */
  _onDismiss = () => {
    this.setState({
      visible: false
    });
  };

  /**
   * Makes a server request to regester a new user
   * @param {Odject} - data
   * @return {string} message
   */
  _register = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    this.props.register({ name, email, username, password, confirmPassword });
  };
  render() {
    return (
      <div className="regform">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        {this.props.auth.error ? (
          <Alert
            isOpen={this.state.visible}
            color="danger"
            toggle={this._onDismiss}
          >
            {this.props.auth.Message}
          </Alert>
        ) : null}
        <Form onSubmit={this._register}>
          <div className="form-group">
            <Label for="name">
              <b>Full Name</b>
            </Label>
            <Input type="text" name="name" placeholder="full name" required />
          </div>

          <div className="form-group">
            <Label for="username">
              <b>Username</b>
            </Label>
            <Input
              type="text"
              name="username"
              placeholder="username"
              required
            />
          </div>

          <div className="form-group">
            <Label for="email">
              <b>Email</b>
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="form-group">
            <Label for="Password">
              <b>Password</b>
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </div>

          <div className="form-group">
            <Label for="confirmPassword">
              <b>Confirm Password</b>
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              required
            />
          </div>
          <div className="form-group" id="submit">
            {!this.props.auth.loading ? (
              <Button type="submit">
              Sign up
              </Button>
            ) : (
              loader
            )}
          </div>

          <br />
          <br />
        </Form>
      </div>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
  }
}

/**
 * Map store state to props
 */
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  register: data => dispatch(register(data))
});

/**
 * Validate props
 */
Register.propTypes = {
  auth: PropTypes.object,
  register: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
