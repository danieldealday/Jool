import React, { Component, Fragment } from "react";
import { Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Form from "../Form";
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
    return (
    <Consumer>
      {({ state, actions }) => (
        <Fragment>
          <Typography variant="display1">Home</Typography>
          <Divider />
          <Form />
        </Fragment>
      )}
    </Consumer>
    )
  }
}


export default withStyles(styles)(Home);
