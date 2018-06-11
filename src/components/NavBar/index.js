import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = () => (
  <Fragment>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Jool
        </Typography>
      </Toolbar>
    </AppBar>
  </Fragment>
);

export default withStyles()(NavBar);
