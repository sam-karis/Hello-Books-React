import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardDeck } from 'reactstrap';
import Book from './Book';
import { getAllBooks } from '../actions/Books';
import PropTypes from 'prop-types';

class Books extends Component {
  constructor() {
    super();
    this.state = { books: [] };
  }

  componentDidMount() {
    this.props.getAllBooks();
  }

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
        <CardDeck>{book}</CardDeck>
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
  getAllBooks: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
