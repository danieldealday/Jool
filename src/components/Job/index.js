import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Typography,
  Chip,
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
    flexBasis: '12.5%',
  },
  col_3: {
    flexBasis: '33.33',
  },
  col_4: {
    flexBasis: '25%',
  },
  col_2: {
    flexBasis: '50%',
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

function Job(props) {
  const { classes } = props;
  const {
    interviewStatus,
    interviewDate,
    companyName,
    jobTitle,
    salaryRate
  } = props.data.toJS();
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.col_8}>
            <Typography className={classes.heading}>{interviewStatus}</Typography>
          </div>
          <div className={classes.col_8}>
            <Typography className={classes.secondaryHeading}>
              {interviewDate}
            </Typography>
          </div>
          <div className={classes.col_8}>
            <Typography className={classes.secondaryHeading}>
              {companyName}
            </Typography>
          </div>
          <div className={classes.col_8}>
            <Typography className={classes.secondaryHeading}>
              {jobTitle}
            </Typography>
          </div>
          <div className={classes.col_2} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column_fill}>
            <Chip
              label="Barbados"
              className={classes.chip}
              onDelete={() => {}}
            />
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice<br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

Job.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Job);
