import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { browserHistory, Link } from 'react-router';
import { getBorrowHistory } from '../actions/BorrowHistory';

class BorrowHistory extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  _getBorrowHistory(returned = null) {
    const access_token = this.props.auth.access_token;
    this.props.getBorrowHistory({ access_token, returned });
  }
  componentDidMount() {
    if (!this.props.auth.loggedIn) {
      browserHistory.push('/login');
    }
    this._getBorrowHistory();
  }

  render() {
    const { history } = this.props.history;
    const { fetching } = this.props.history;

    return (
      <div id="borrowHistory">
        <div>
          <br />
          <h4>Borrowing history</h4>
        </div>
        {this.props.history.error ? (
          <div id="noHistory">
            <br />
            {this.props.history.Message}
            <Link to="books"> View books to Borrow</Link>
          </div>
        ) : (
          <Fragment>
            <div className="action">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="success">
                  Filter History
                </DropdownToggle>
                <DropdownMenu>
                  <div>
                    <DropdownItem onClick={() => this._getBorrowHistory(true)}>
                      All books borrowed
                    </DropdownItem>
                    <DropdownItem onClick={() => this._getBorrowHistory(false)}>
                      Books not Returned
                    </DropdownItem>
                  </div>
                </DropdownMenu>
              </Dropdown>
            </div>

            <Table hover bordered>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Borrow Date</th>
                  <th>Return Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {!fetching ? (
                  <Fragment>
                    {history.map((history, index) => (
                      <tr key={index}>
                        <td>{history.Title}</td>
                        <td>{history.Author}</td>
                        <td>{history.time_borrowed}</td>
                        <td>{history.return_date}</td>
                        <td>
                          <Link to={`books/${history.book_id}`}>
                            {history.returned ? 'Returned' : 'Not Returned'}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ) : null}
              </tbody>
            </Table>
          </Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    history: state.history
  };
};
const mapDispatchToProps = dispatch => ({
  getBorrowHistory: data => dispatch(getBorrowHistory(data))
});

BorrowHistory.propTypes = {
  auth: PropTypes.object,
  history: PropTypes.object,
  getBorrowHistory: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BorrowHistory);
