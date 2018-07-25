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
        <section id="section"> Welcome to hello books</section>
      </div>
    );
  }
}

export default Home;
