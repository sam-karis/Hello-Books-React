import React, { Component } from 'react';

/**
 * This component render footer for the application
 */
export default class Footer extends Component {
  render() {
    return (
      <footer className="signupFooter">
        <br />
        <div className="text-center text-muted">
          <small>
            <p>
              Developed by Sammy Kariuki &copy; Copyright
              <script>document.write(new Date().getFullYear())</script> Term &
              Condition Apply
            </p>
          </small>
        </div>
        <br />
      </footer>
    );
  }
}
