import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="blue-grey lighten-4 z-depth-0">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a className="waves-effect waves-light btn red darken-4 flat z-depth-0">
                <i className="material-icons left">lock</i> Login with Google
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
