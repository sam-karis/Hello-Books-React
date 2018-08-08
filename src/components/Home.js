import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    };
  }
  _handleClick = () =>
    this.setState({
      loggedIn: !this.state.loggedIn
    });

  render() {
    return (
      <div id="homecontent">
        <div className="row" id="section">
          <div className="col-sm-6">
            <br />
            <br />
            <br />
            <h5>Your best Library Management System</h5>
            <p>
              Hello-Books helps you manage and track books and users who
              interact with your library.<br />
            </p>
          </div>
          <div className="col-sm-2" />
          <div className="col-sm-3" id="services">
            <h5>Services offered</h5>
            <hr />
            <ul>
              <li>Managing books by the admin</li>
              <br />
              <li>Viewing, borrowing and returning books</li>
              <br />
              <li>Viewing user borrow history</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
