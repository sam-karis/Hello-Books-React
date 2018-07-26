import React, { Component } from 'react';
import { Form, Alert, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { addBook } from '../actions/Admin';

class AddEdit extends Component {
  componentDidMount() {
    if (!this.props.auth.loggedIn) {
      browserHistory.push('/login');
    }
  }

  _addBook = e => {
    e.preventDefault();
    const access_token = this.props.auth.access_token;
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const edition = e.target.elements.edition.value;
    const description = e.target.elements.description.value;
    this.props.addBook({ title, author, edition, description, access_token });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="addEditForm">
        <h4>Add a book in the library</h4>
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
        <Form onSubmit={this._addBook}>
          <div className="form-group">
            <Label for="title">
              <b>Title</b>
            </Label>
            <Input type="text" name="title" placeholder="Book title" required />
          </div>
          <div className="form-group">
            <Label for="author">
              <b>Author</b>
            </Label>
            <Input
              type="text"
              name="author"
              placeholder="Author Name"
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
              placeholder="Book Edition"
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
              placeholder="Book Description"
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
    books: state.books
  };
};
const mapDispatchToProps = dispatch => ({
  addBook: data => addBook(dispatch, data)
});

AddEdit.propTypes = {
  books: PropTypes.object,
  auth: PropTypes.object,
  admin: PropTypes.object,
  addBook: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEdit);
