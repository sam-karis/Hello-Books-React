import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Book from './Book';
import { getAllBooks } from '../actions/Books';
import PropTypes from 'prop-types';
import JwPagination from 'jw-react-pagination';

class Books extends Component {
  constructor(){
    super();
    this.state = {
      pageOfItems: []
    };
  }

  componentDidMount() {
    this.props.getAllBooks();
  }

  _onchangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  }

  render() {
    let book = this.state.pageOfItems.map(book => {
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
        < JwPagination items={this.props.books.books} pageSize={8} onChangePage={this._onchangePage}/>

        {this.props.auth.isAdmin ? (
          <Link
            id="addBookbtn"
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
  getAllBooks: () => dispatch(getAllBooks())
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
