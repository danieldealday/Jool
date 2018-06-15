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
  const { classes } = props;
  const {
    interviewStatus,
    interviewDate,
    companyName,
    jobTitle,
    salaryRate
  } = props.data.toJS();
  return (
    <Fragment>
      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={40} warp="nowrap">
          <Grid item>
            <Typography variant="body2" noWrap>{interviewStatus}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" noWrap>{interviewDate}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" noWrap>{companyName}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" noWrap>{jobTitle}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" noWrap>{salaryRate}</Typography>
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
