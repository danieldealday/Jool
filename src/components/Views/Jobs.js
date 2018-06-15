import React, { Fragment } from "react";
import { Typography, Divider } from "@material-ui/core";
import { Consumer } from "../../Context";
import Job from "../Job";

const Jobs = () => (
  <Consumer>
    {({ state }) => {
      return (
        <Fragment>
          <Typography variant="display1">Jobs</Typography>
          <Divider />
          {state.jobList.map(x => {
            return <Job data={x} key={x.toJS().created} />;
          })}
        </Fragment>
      );
    }}
  </Consumer>
);

export default Jobs;
