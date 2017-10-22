import React, { Component } from 'react';
import Payment from './Payment';

class Navbar extends Component {
  render() {
    return (
      <ul className="right hide-on-med-and-down">
        <li>
          <Payment />
        </li>

        <li>
          <a
            href="/surveys/new"
            className="waves-effect waves-light btn blue flat z-depth-0"
          >
            <i className="material-icons left">add</i>
            <small>My Credits: {this.props.nytCredits}</small>
          </a>
        </li>

        <li>
          <a
            href="/api/logout"
            className="waves-effect waves-light btn grey darken-2 flat z-depth-0"
          >
            <i className="material-icons left">power_settings_new</i>
            <small>Sign out</small>
          </a>
        </li>
      </ul>
    );
  }
}

export default Navbar;
