import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardBody, CardFooter } from 'reactstrap';
import { getSingleBook } from '../actions/Books';
import PropTypes from 'prop-types';

/**
 * This component render a book in all books page
 */
class Book extends Component {
  _getSingleBook = () => {
    const book_id = this.props.params.id;
    this.props.getSingleBook(book_id);
  };
  render() {
    return (
      <div className="col-lg-3 col-sm-6 col-md-4" id='bookCard'>
        <Card body outline color="info">
          <CardTitle>{this.props.book.Title} </CardTitle>
          <CardBody>
            <CardText>Status : {this.props.book.status}</CardText>
          </CardBody>
          <CardFooter>Authored by : {this.props.book.author}</CardFooter>
          <Link
            to={`books/${this.props.book.book_id}`}
            className="btn btn-success"
            role="button"
          >
            View Details
          </Link>
        </Card>
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
    books: state.books,
    onebook: state.book
  };
};

const mapDispatchToProps = dispatch => ({
  getSingleBook: id => getSingleBook(dispatch, id)
});

/**
 * Validate props
 */
Book.propTypes = {
  book: PropTypes.object,
  getSingleBook: PropTypes.func,
  params: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
