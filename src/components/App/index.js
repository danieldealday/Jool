import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import NavBar from "../NavBar";
import { Home, Schedule, Calendar, Contacts } from '../Views';

const App = () => (
  <Router>
    <Fragment>
      <CssBaseline />
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/contacts" component={Contacts} />
    </Fragment>
  </Router>
);
export default withStyles()(App);
