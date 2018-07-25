import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Label, Input } from 'reactstrap';
import { register } from '../actions/Register';
import PropTypes from 'prop-types';

class Register extends Component {
  constructor() {
    super();
    this.state = {};
  }

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

          <div className="form-group">
            <Button type="submit" id="submit">
              Sign up
            </Button>
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  register: data => register(dispatch, data)
});

Register.propTypes = {
  auth: PropTypes.object,
  register: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
