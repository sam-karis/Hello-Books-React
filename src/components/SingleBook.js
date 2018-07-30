import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { getSingleBook } from '../actions/Books';
import PropTypes from 'prop-types';
import { deleteBook } from '../actions/Admin';
import { borrowBook } from '../actions/User';
import { returnBook } from '../actions/User';

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      borrowedStatus: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  _getSingleBook = () => {
    const book_id = this.props.params.id;
    this.props.getSingleBook(book_id);
  };

  _deleteBook = () => {
    const access_token = this.props.auth.access_token;
    const book_id = this.props.params.id;
    this.props.deleteBook({ access_token, book_id });
  };

  _borrowBook = () => {
    const access_token = this.props.auth.access_token;
    const email = this.props.auth.email;
    const book_id = this.props.params.id;
    this.props.borrowBook({ access_token, email, book_id });
  };

  _returnBook = () => {
    const access_token = this.props.auth.access_token;
    const email = this.props.auth.email;
    const book_id = this.props.params.id;
    this.props.returnBook({ access_token, email, book_id });
  };

  componentDidMount() {
    this._getSingleBook();
  }

  render() {
    const { book } = this.props.book;
    let borrowedStatus = false;
    if (this.props.book.book.status === 'Borrowed') {
      borrowedStatus = true;
    } else {
      borrowedStatus = false;
    }
    return (
      <div align="center">
        <br />
        <Card body outline color="info" align="justify" className="col-sm-6">
          <div>
            <div className="bookHeader">
              <CardTitle className="content-center">Book Details</CardTitle>
            </div>
            {this.props.auth.loggedIn ? (
              <div className="action">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>Actions</DropdownToggle>
                  <DropdownMenu>
                    <div className="user">
                      <DropdownItem header>User</DropdownItem>
                      <DropdownItem
                        disabled={borrowedStatus}
                        onClick={this._borrowBook}
                      >
                        Borrow Book
                      </DropdownItem>
                      <DropdownItem
                        disabled={!borrowedStatus}
                        onClick={this._returnBook}
                      >
                        Return Book
                      </DropdownItem>
                    </div>
                    {this.props.auth.isAdmin ? (
                      <div className="admin">
                        <DropdownItem divider />
                        <DropdownItem header>Admin</DropdownItem>
                        <DropdownItem>Edit</DropdownItem>
                        <DropdownItem onClick={this._deleteBook}>
                          Delete
                        </DropdownItem>
                      </div>
                    ) : null}
                  </DropdownMenu>
                </Dropdown>
              </div>
            ) : null}
          </div>
          <hr />
          {!this.props.book.error ? (
            <Fragment>
              <CardBody>
                <CardText>Title: {book.Title} </CardText>
                <CardText>Description : {book.description}</CardText>
                <CardText>Edition : {book.edition}</CardText>
                <CardText>Status : {book.status}</CardText>
              </CardBody>
              <CardFooter>Authored by : {book.author}</CardFooter>
            </Fragment>
          ) : (
            <CardBody>
              <CardText>{this.props.book.Message}</CardText>
            </CardBody>
          )}
          <Link to="/books" className="btn btn-success" role="button">
            Back
          </Link>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    book: state.book
  };
};

const mapDispatchToProps = dispatch => ({
  getSingleBook: data => dispatch(getSingleBook(data)),
  deleteBook: data => dispatch(deleteBook(data)),
  borrowBook: data => dispatch(borrowBook(data)),
  returnBook: data => dispatch(returnBook(data))
});

SingleBook.propTypes = {
  book: PropTypes.object,
  auth: PropTypes.object,
  params: PropTypes.object,
  getSingleBook: PropTypes.func,
  deleteBook: PropTypes.func,
  borrowBook: PropTypes.func,
  returnBook: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBook);
