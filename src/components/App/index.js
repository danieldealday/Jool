import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  List
} from "@material-ui/core";
import NavBar from "../NavBar";
import { Home, Contacts, Jobs, Schedule } from "../Views";

const drawerWidth = 300;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  themeFont: {
    fontFamily: "'Bree Serif', serif",
    fontWeight: 'bold',
    fontSize: '2.5em'
  }
});

function App(props) {
  const { classes } = props;

  return (
    <Router>
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap className={classes.themeFont}>
                Jool
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div className={classes.toolbar} />
            <List>
              <NavBar />
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path="/" component={Home} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/schedule" component={Schedule} />
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
