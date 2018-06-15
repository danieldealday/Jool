import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { Consumer } from "../../Context";
import Job from "../Job";

const Jobs = () => {
  return (
    <Consumer>
      {({ state }) => {
        return (
          <Fragment>
            <Typography variant="display1">Jobs</Typography>
            {state.jobList.map(x => {
              return <Job data={x} key={x.toJS().created} />;
            })}
          </Fragment>
        );
      }}
    </Consumer>
  );
};

export default Jobs;
