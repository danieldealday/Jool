import React, { Fragment } from "react";
import { Typography, Divider } from "@material-ui/core";
import Job from "../Job";
import { Consumer } from "../../Context";

const Home = props => (
  <Consumer>
    {({ state, actions }) => (
      <Fragment>
        <Typography variant="display1">Home</Typography>
        <Divider />
        {state.jobList.map(x => 
            <Job data={x} key={x.toJS().created} />
          )}
      </Fragment>
    )}
  </Consumer>
);

export default Home;
