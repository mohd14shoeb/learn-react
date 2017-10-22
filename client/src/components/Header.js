import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payment from './Payment';
import Spinner from './Spinner';
import Navbar from './Navbar';
import Login from './Login';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case false:
        return <Login />;
      case null:
        return <Spinner />;
      default:
        return <Navbar />;
    }
  }

  render() {
    return (
      <nav className="blue-grey lighten-4 z-depth-0">
        <div className="nav-wrapper container">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
            <i className="large material-icons left">email</i> Emaily
          </Link>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
