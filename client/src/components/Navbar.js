import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a className="waves-effect waves-light btn green flat z-depth-0">
            <i className="material-icons left">add</i>
            <small>Add Credit</small>
          </a>
        </li>

        <li>
          <a className="waves-effect waves-light btn grey darken-2 flat z-depth-0">
            <i className="material-icons left">attach_money</i>
            <small>My Credits</small>
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