import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Typography,
  Button,
  Divider
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: theme.mixins.gutters({
    width: "100%",
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: theme.spacing.unit
  }),
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  column_fill: {
    flexBases: "66.66%"
  },
  col_8: {
    flexBasis: "12.5%"
  },
  col_3: {
    flexBasis: "33.33"
  },
  col_4: {
    flexBasis: "25%"
  },
  col_2: {
    flexBasis: "50%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

class Job extends Component {
  state = this.props.data.toJS();
  
  render() {
    const { classes } = this.props;
    const {
      interviewStatus,
      applicationDate,
      companyName,
      jobTitle,
      salaryRate,
      location,
      jobDescription,
      nextAppointmentDate
    } = this.props.data.toJS();
    
    // * defaultExpanded is used as attribute for ExpansionPanel
    return (
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.col_8}>
              <Typography variant="button" color="primary">
                {interviewStatus}
              </Typography>
            </div>
            <div className={classes.col_8}>
              <Typography className={classes.secondaryHeading}>
                {applicationDate}
              </Typography>
            </div>
            <div className={classes.col_4}>
              <Typography className={classes.secondaryHeading}>
                {companyName}
              </Typography>
            </div>
            <div className={classes.col_4}>
              <Typography className={classes.secondaryHeading}>
                {jobTitle}
              </Typography>
            </div>
            <div className={classes.col_8}>
              <Typography className={classes.secondaryHeading}>
                {location}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.details}>
              <Typography variant="headline">{jobTitle}</Typography>
              <Typography variant="title">
                {companyName} - {location}
              </Typography>
              <Typography variant="body2">
                ${salaryRate} a year
              </Typography>
              <br />
              <Typography variant="subheading">
                Application Date: {applicationDate}
              </Typography>
              <Typography variant="subheading">
                Next appointment: {nextAppointmentDate}
              </Typography>
              <br />
              <Typography variant="body2">
                Job Description: {jobDescription}
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button variant="contained" size="small" color="primary">
              Edit
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

Job.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Job);
