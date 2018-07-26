import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Book from './Book';
import { getAllBooks } from '../actions/Books';
import PropTypes from 'prop-types';

class Books extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
  }

  componentDidMount() {
    this.props.getAllBooks();
  }

  _toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    let book = this.props.books.books.map(book => {
      return <Book key={book.book_id} book={book} />;
    });

    return (
      <div id="books">
        <div>
          <br />
          <h4>Books Available</h4>
          <hr />
        </div>

        <div className="row">{book}</div>

        {this.props.auth.isAdmin ? (
          <Link
            id="addBookbtn"
            onClick={this._toggle}
            to={'/add'}
            className="btn btn-success"
            role="button"
          >
            Add Book
          </Link>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    books: state.books
  };
};
const mapDispatchToProps = dispatch => ({
  getAllBooks: data => getAllBooks(dispatch, data)
});

Books.propTypes = {
  books: PropTypes.object,
  auth: PropTypes.object,
  getAllBooks: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
