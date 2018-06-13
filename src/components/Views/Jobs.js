import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { Consumer } from "../../Context";
import Job from "../Job";

const Jobs = () => {
  return (
    <Consumer>
      {({ state, actions }) => {
        return (
          <Fragment>
            <Typography variant="display1">Jobs</Typography>
            <Job />
          </Fragment>
        );
      }}
    </Consumer>
  );
};

// const Jobs = () => (
//   <Fragment>
//     <Typography variant="display1">Jobs</Typography>
//     <Job />
//   </Fragment>
// );

export default Jobs;
