import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { logout } from '../actions/Logout';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  _logout = e => {
    e.preventDefault();
    const email = this.props.auth.email;
    const access_token = this.props.auth.access_token;
    this.props.logout({ email, access_token });
    this.forceUpdate();
  };

  _toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  render() {
    return (
      <div>
        <Navbar color="light" id="header" light expand="md">
          <Link to="/" className="navbar-brand">
            Hello Books
          </Link>
          <NavbarToggler onClick={this._toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/books" id="drop" className="nav-link">
                  Books
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" id="drop" className="nav-link">
                  About Us
                </Link>
              </NavItem>
              {!this.props.auth.loggedIn ? (
                <Fragment>
                  <NavItem>
                    <Link to="/register" id="drop" className="nav-link">
                      Sign Up
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/login" id="drop" className="nav-link">
                      Login
                    </Link>
                  </NavItem>
                </Fragment>
              ) : (
                <Fragment>
                  <NavItem>
                    <Link to="/userhistory" id="drop" className="nav-link">
                      History
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown>
                    <DropdownToggle id="drop" nav caret>
                      {this.props.auth.username}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Profile</DropdownItem>
                      <DropdownItem onClick={this._logout}>Logout</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Fragment>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  logout: data => logout(dispatch, data)
});

Header.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
