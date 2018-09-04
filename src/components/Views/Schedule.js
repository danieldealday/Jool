import React, { Fragment } from "react";
import { Consumer } from "../../Context";
import { Typography, Divider } from "@material-ui/core";
import DialogEdit from "../DialogEdit";

// const Schedule = () => <Typography variant="display1">Schedule</Typography>;

const Schedule = () => (
  <Consumer>
    {({ state }) => {
      return (
        <Fragment>
          <Typography variant="display1">Schedule</Typography>
          <Divider />
        </Fragment>
      );
    }}
  </Consumer>
);

export default Schedule;
