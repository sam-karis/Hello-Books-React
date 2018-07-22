import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
    Card, CardTitle, CardText, CardBody, CardFooter,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { getSingleBook } from '../actions/Books';

class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            borrowedStatus: false,
            returnedStatus: true
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    _getSingleBook = () => {
        const book_id = this.props.params.id;
        this.props.getSingleBook(book_id)
    }
    componentDidMount() {
        this._getSingleBook();
        if (this.props.book.book.status === 'Borrowed') {
            this.setState({
                borrowedStatus: !this.state.borrowedStatus,
                returnedStatus: !this.state.returnedStatus
            });
        }
    }
    render() {
        const { book } = this.props.book;
        return (
            <div align='center'>
                <Card body outline color='info' align='justify' className='col-sm-6'>
                    <div>
                        <div className='bookHeader'>
                            <CardTitle className='content-center'>Book Details</CardTitle>
                        </div>
                        {this.props.auth.loggedIn ?
                            <div className='action'>
                                <Dropdown
                                    isOpen={this.state.dropdownOpen}
                                    toggle={this.toggle}>
                                    <DropdownToggle caret>
                                        Actions
                        </DropdownToggle>
                                    <DropdownMenu>
                                        <div className='user'>
                                            <DropdownItem header>User</DropdownItem>
                                            <DropdownItem disabled={this.state.borrowedStatus}>Borrow Book</DropdownItem>
                                            <DropdownItem disabled={this.state.returnedStatus}>Return Book</DropdownItem>
                                        </div>
                                        {this.props.auth.isAdmin ?
                                            <div className='admin'>
                                                <DropdownItem divider />
                                                <DropdownItem header>Admin</DropdownItem>
                                                <DropdownItem>Edit</DropdownItem>
                                                <DropdownItem>Delete</DropdownItem>
                                            </div> : null}
                                    </DropdownMenu>
                                </Dropdown>
                            </div> : null}
                    </div>
                    <hr />
                    {(!this.props.book.error) ?
                        <Fragment>
                            <CardBody>
                                <CardText>Title: {book.Title} </CardText>
                                <CardText>Description : {book.description}</CardText>
                                <CardText>Edition : {book.edition}</CardText>
                                <CardText>Status : {book.status}</CardText>
                            </CardBody>
                            <CardFooter>Authored by : {book.author}</CardFooter>
                        </Fragment> :
                        <CardBody>
                            <CardText>{this.props.book.Message}</CardText>
                        </CardBody>}
                    <Link to='/books' className="btn btn-success" role="button">Back</Link>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        book: state.book
    }
}
const mapDispatchToProps = (dispatch) => ({
    getSingleBook: (id) => getSingleBook(dispatch, id)
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);