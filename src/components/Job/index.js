import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

const Job = props => {
  const { classes, data } = props;
  const {
    interviewStatus,
    interviewDate,
    companyName,
    jobTitle,
    salaryRate
  } = props.data;
  console.log("RECEIVED KEY: ", data.created);
  return (
    <Fragment>
      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={40}>
          <Grid item={3}>
            <Typography variant="body2">{interviewStatus}</Typography>
          </Grid>
          <Grid item={3}>
            <Typography variant="body2">{interviewDate}</Typography>
          </Grid>
          <Grid item={3}>
            <Typography variant="body2">{companyName}</Typography>
          </Grid>
          <Grid item={3}>
            <Typography variant="body2">{jobTitle}</Typography>
          </Grid>
          <Grid item={3}>
            <Typography variant="body2">{salaryRate}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

Job.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Job);
