import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Book from './Book';
import { getAllBooks } from '../actions/Books';
import PropTypes from 'prop-types';
import JwPagination from 'jw-react-pagination';
import { pageLoader } from './../config';

/**
 * This component render all books page
 */
class Books extends Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: []
    };
  }

  /**
   * Makes a server request to get all available books
   */
  componentDidMount() {
    this.props.getAllBooks();
  }

  _onchangePage = pageOfItems => {
    this.setState({ pageOfItems });
  };

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

        <Fragment>
          {this.props.books.pageLoading ? (
            <div className="row">{pageLoader}</div>
          ) : (
            <Fragment>
              <div className="row">{book}</div>

              <JwPagination
                items={this.props.books.books}
                pageSize={8}
                onChangePage={this._onchangePage}
              />

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
            </Fragment>
          )}
        </Fragment>
      </div>
    );
  }
}

/**
 * Map store state to props
 */
const mapStateToProps = state => {
  return {
    auth: state.auth,
    books: state.books
  };
};

const mapDispatchToProps = dispatch => ({
  getAllBooks: () => dispatch(getAllBooks())
});

/**
 * Validate props
 */
Books.propTypes = {
  books: PropTypes.object,
  auth: PropTypes.object,
  getAllBooks: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
