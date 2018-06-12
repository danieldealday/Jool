import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";



const NavBar = () => (
  <Fragment>
    <AppBar position="absolute" color="primary" className="classes.topBar">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Jool
        </Typography>
      </Toolbar>
    </AppBar>
  </Fragment>
);

export default withStyles()(NavBar);
