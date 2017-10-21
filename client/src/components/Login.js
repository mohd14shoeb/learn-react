import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a
            href="/auth/google"
            className="waves-effect waves-light btn red darken-4 flat z-depth-0"
          >
            <i className="material-icons left">lock</i>
            <small>Login with Google</small>
          </a>
        </li>
      </ul>
    );
  }
}

export default Login;
