import React, { Component, Fragment } from "react";
import { Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Job from "../Job";
import { Consumer } from "../../Context";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit*2,
    marginBottom: theme.spacing.unit*2
  }
});
class Home extends Component {
  
  render() {
    const { classes } = this.props;
    return (
    <Consumer>
      {({ state, actions }) => (
        <Fragment>
          <Typography variant="display1">Home</Typography>
          <Divider />
          <div className={classes.root}>
            {state.jobList.map(x => 
                <Job data={x} key={x.toJS().created} />
              )}
          </div>
        </Fragment>
      )}
    </Consumer>
    )
  }
}


export default withStyles(styles)(Home);
