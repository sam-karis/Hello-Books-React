import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {
    Card, CardTitle, CardText, CardBody, CardFooter
} from 'reactstrap';
import { getSingleBook } from '../actions/Books';

class Book extends Component {

    _getSingleBook = (id) => {
        const book_id = this.props.match.params.id;
        this.props.getSingleBook(book_id)
    }
    render() {
        return (
            <Card body outline color='info'>
                <CardTitle>{this.props.book.Title} </CardTitle>
                <CardBody>
                    <CardText>Status : {this.props.book.status}</CardText>
                </CardBody>
                <CardFooter>Authored by : {this.props.book.author}</CardFooter>
                <Link
                    to={`books/${this.props.book.book_id}`}
                    className="btn btn-success" role="button">
                    View Details
                </Link>
            </Card >

        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        books: state.books,
       onebook: state.book
    }
}
const mapDispatchToProps = (dispatch) => ({
    getSingleBook: (id) => getSingleBook(dispatch, id)
})

export default connect(mapStateToProps, mapDispatchToProps)(Book);