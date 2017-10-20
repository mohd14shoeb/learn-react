import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <div className="container">Dashboard</div>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <div className="container">Landing</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser(); // Why it works??? in video fetchUser() cause miss export
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/survey" exact component={Dashboard} />
            <Route path="/survey/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
