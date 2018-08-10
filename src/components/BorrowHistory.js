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
import JwPagination from 'jw-react-pagination';
import { pageLoader } from './../config';

/**
 * This component render user borrowing history page
 */
class BorrowHistory extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
      pageOfItems: []
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  /**
   * Makes a server request to get user borrowing history
   */
  _getBorrowHistory(returned = null) {
    const access_token = this.props.auth.access_token;
    this.props.getBorrowHistory({ access_token, returned });
  }

  _onchangePage = pageOfItems => {
    this.setState({ pageOfItems });
  };

  /**
   * Protect the page from been assessed by users not logged in
   */
  componentDidMount() {
    if (!this.props.auth.loggedIn) {
      browserHistory.push('/login');
    }
    this._getBorrowHistory();
  }

  render() {
    const history = this.state.pageOfItems;
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
            {fetching ? (
              <div className="row">{pageLoader}</div>
            ) : (
              <Fragment>
                <div className="action">
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle caret color="success">
                      Filter History
                    </DropdownToggle>
                    <DropdownMenu>
                      <div>
                        <DropdownItem
                          onClick={() => this._getBorrowHistory(true)}
                        >
                          All books borrowed
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => this._getBorrowHistory(false)}
                        >
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
                      <th>Expected / Return Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((history, index) => (
                      <tr key={index}>
                        <td>{history.Title}</td>
                        <td>{history.Author}</td>
                        <td>{history.time_borrowed}</td>
                        <td>{history.return_date}</td>
                        {!history.deleted ? (
                          <td>
                            <Link to={`books/${history.book_id}`}>
                              {history.returned ? 'Returned' : 'Not Returned'}
                            </Link>
                          </td>
                        ) : (
                          <td>No longer available</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <JwPagination
                  items={this.props.history.history}
                  pageSize={10}
                  onChangePage={this._onchangePage}
                />
              </Fragment>
            )}
          </Fragment>
        )}
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
    history: state.history
  };
};
const mapDispatchToProps = dispatch => ({
  getBorrowHistory: data => dispatch(getBorrowHistory(data))
});

/**
 * Validate props
 */
BorrowHistory.propTypes = {
  auth: PropTypes.object,
  history: PropTypes.object,
  getBorrowHistory: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BorrowHistory);
