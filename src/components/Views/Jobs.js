import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { Consumer } from "../../Context";
import Job from "../Job";

const Jobs = () => {
  return (
    <Consumer>
      {({ state, actions }) => {
        // * state.get('stringPropertyName') retrieves property of immutable <Map>
        // *  .map() is an integratted map method to the <List> data structure
        return (
          <Fragment>
            <Typography variant="display1">Jobs</Typography>
            {state.get('jobList').map((x) => (
              <Job data={x} key={x.toJS().created}/>
            ))}
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
