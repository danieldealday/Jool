import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { Consumer } from "../../Context";
import Job from "../Job";

const Jobs = () => {
  // * state is transformed deeply to JavaScript from immutable Map
  return (
    <Consumer>
      {({ state, actions }) => {
        const appdata = state.toJS();
        return (
          <Fragment>
            <Typography variant="display1">Jobs</Typography>
            <Job />
            <Typography variant="body1">{JSON.stringify(appdata)}</Typography>
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
