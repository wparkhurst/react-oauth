import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import Login from "./Login";
import Spinner from "./Spinner";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return <Spinner />;
      case false:
        return <Login />;
      default:
        return (
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            {this.renderContent()}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
