import React, { Component } from 'react';
import { Form, Alert, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { editBook } from '../actions/Admin';
import { getSingleBook } from '../actions/Books';

class EditBook extends Component {
  constructor() {
    super();
    this.state = {
      edited: {}
    };
  }

  componentDidMount() {
    if (!this.props.auth.loggedIn) {
      browserHistory.push('/login');
    }
    const book_id = this.props.params.id;
    this.props.getSingleBook(book_id);
  }

  handleChange = e => {
    const val = {};
    const edited = this.state.edited;
    edited[e.target.name] = true;
    val['edited'] = edited;
    val[e.target.name] = e.target.value;
    this.setState(val);
  };

  getValue = name => {
    if (this.state.edited[name]) {
      return this.state[name];
    }
    return this.props.book.book[name];
  };

  _editBook = e => {
    e.preventDefault();
    const book_id = this.props.book.book.book_id;
    const access_token = this.props.auth.access_token;
    const title = this.getValue('Title');
    const author = this.getValue('author');
    const edition = this.getValue('edition');
    const description = this.getValue('description');
    this.props.editBook({
      book_id,
      title,
      author,
      edition,
      description,
      access_token
    });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="addEditForm">
        <h4>Edit a book in the library</h4>
        <p>Enter book details.</p>
        <hr />
        {this.props.auth.error ? (
          <Alert
            isOpen={this.state.visible}
            color="danger"
            toggle={this._onDismiss}
          >
            {this.props.auth.Message}
          </Alert>
        ) : null}
        <Form onSubmit={this._editBook}>
          <div className="form-group">
            <Label for="title">
              <b>Title</b>
            </Label>
            <Input
              type="text"
              name="Title"
              value={this.getValue('Title')}
              onChange={this.handleChange}
              placeholder="Book title"
              required
            />
          </div>
          <div className="form-group">
            <Label for="author">
              <b>Author</b>
            </Label>
            <Input
              type="text"
              name="author"
              value={this.getValue('author')}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Label for="edition">
              <b>Edition</b>
            </Label>
            <Input
              type="text"
              name="edition"
              value={this.getValue('edition')}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Label for="description">
              <b>Description</b>
            </Label>
            <Input
              type="text"
              name="description"
              value={this.getValue('description')}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Button type="submit" id="submit" className="btn btn-success">
              Save
            </Button>
          </div>
          <br />
        </Form>
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
  editBook: data => dispatch(editBook(data)),
  getSingleBook: id => dispatch(getSingleBook(id))
});

EditBook.propTypes = {
  params: PropTypes.object,
  book: PropTypes.object,
  auth: PropTypes.object,
  admin: PropTypes.object,
  editBook: PropTypes.func,
  getSingleBook: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBook);
