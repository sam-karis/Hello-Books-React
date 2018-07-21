import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {connect} from 'react-redux'
import {api_url} from './../config'
import { Table } from 'reactstrap';
import Book from './Book';

class Books extends Component {
    constructor() {
        super();
        this.state = { books: [] }
    }

    componentDidMount() {
        axios.get(api_url + 'books', {
        }).then(books => {
            this.setState({ books: books.data.books })
        }).catch(error => {
            if (error.response.status === 204) {
                const message = error.response.data.Message;
                swal("Error!!", message, "error");
            }
        });
    }

    render() {
        let book = this.state.books.map(book => {
            return (
                <Book key={book.book_id} book={book} />
            );
        });

        return (
            <div id='books'>
                <div><br />
                    <h4 >Books Available</h4><br />
                </div>
                <Table id='bookstable' responsive hover>
                    <thead>
                        <tr style={{ backgroundColor:'#ddd' }}>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Edition</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {book}
                </Table>
            </div>
        );
    }   
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        login : state.login
    }
}
const mapDispatchToProps = (dispatch) => ({
    // login: () => dispatch({type: 'LOGIN_SUCCESS', data: data})
})

export default connect(mapStateToProps,mapDispatchToProps)(Books);