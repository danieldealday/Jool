import React, { Component } from "react";
import { Consumer } from "../../Context";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Typography,
  Button,
  Menu,
  MenuItem,
  TextField
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Object } from "core-js";
import DialogEdit from '../DialogEdit';

const styles = theme => ({
  root: theme.mixins.gutters({
    width: "100%",
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
    padding: theme.spacing.unit * 2
  },
  col_8: {
    flexBasis: "12.5%"
  },
  col_4: {
    flexBasis: "25%"
  },
  col_status: {
    flexBasis: "12.5%"
  },
  col_desc: {
    flexBasis: "37.5%"
  },
  col_notes: {
    flexBasis: "100%"
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

const statusOptions = ["Applied", "Phone", "Tech", "Offer", "Closed"];

class Job extends Component {
  state = {
    anchorEl: null,
    selectedIndex: 0,
    expanded: true,
    notes: "",
    editted: false
  };

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  selectStatus = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = e => {
    const modState = {};
    modState["editted"] = true;
    modState[e.target.name] = e.target.value;
    this.setState((prevState, props) => Object.assign(prevState, modState));
  };

  togglePanel = () => {
    this.setState((prevState, props) =>
      Object.assign(prevState, {
        expanded: !prevState.expanded
      })
    );
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const {
      created,
      interviewStatus,
      applicationDate,
      companyName,
      jobTitle,
      salaryRate,
      location,
      jobURL,
      nextAppointmentDate,
      notes,
      hiringManager,
      contactEmail,
      contactPhone
    } = this.props.data.toJS();

    // * defaultExpanded is used as attribute for ExpansionPanel
    // TODO: attach `hidden` attribute in ExpansionPanel Summary to hide

    return (
      <Consumer>
        {({ state, actions }) => (
          <ExpansionPanel expanded={this.state.expanded}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              onClick={this.togglePanel}
            >
              <div className={classes.col_8} hidden={this.state.expanded}>
                <Typography variant="button" color="primary">
                  {interviewStatus}
                </Typography>
              </div>
              <div className={classes.col_8} hidden={this.state.expanded}>
                <Typography className={classes.secondaryHeading}>
                  {applicationDate}
                </Typography>
              </div>
              <div className={classes.col_4} hidden={this.state.expanded}>
                <Typography className={classes.secondaryHeading}>
                  {companyName}
                </Typography>
              </div>
              <div className={classes.col_4} hidden={this.state.expanded}>
                <Typography className={classes.secondaryHeading}>
                  {jobTitle}
                </Typography>
              </div>
              <div className={classes.col_8} hidden={this.state.expanded}>
                <Typography className={classes.secondaryHeading}>
                  {location}
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classNames(classes.col_status, classes.details)}>
                <Button
                  variant="contained"
                  color="primary"
                  aria-owns={anchorEl ? "simple-menu" : null}
                  aria-haspopup="true"
                  onClick={this.handleOpen}
                >
                  {statusOptions[this.state.selectedIndex]}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  {statusOptions.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === this.state.selectedIndex}
                      onClick={async event => {
                        await this.selectStatus(event, index);
                        actions.JOB_EDIT(
                          created,
                          "interviewStatus",
                          statusOptions[this.state.selectedIndex]
                        );
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
              <div className={classNames(classes.col_desc, classes.details)}>
                <Typography variant="title" onClick={this.handleClick}>
                  {jobTitle}
                </Typography>
                <br />
                <Typography variant="subheading">{companyName}</Typography>
                <Typography variant="subheading">{location}</Typography>
                <Typography variant="caption">${salaryRate} a year</Typography>
                <br />
                <Typography variant="body2">Application Date:</Typography>
                <Typography vairant="body1">{applicationDate}</Typography>
                <Typography variant="body2">Next appointment:</Typography>
                <Typography variant="body1">{nextAppointmentDate}</Typography>
                <br />
                <Typography variant="body2">Hiring Manager:</Typography>
                <Typography variant="body1">{hiringManager}</Typography>
                <Typography variant="body2">Contact E-mail:</Typography>
                <Typography variant="body1">{contactEmail}</Typography>
                <Typography variant="body2">Contact Phone:</Typography>
                <Typography variant="body1">{contactPhone}</Typography>
              </div>
              <div className={classNames(classes.col_notes, classes.details)}>
                  <TextField
                    multiline
                    fullWidth={true}
                    label="Notes"
                    rows="15"
                    rowsMax="15"
                    margin="dense"
                    autoFocus={true}
                    placeholder={notes}
                    id="notes"
                    name="notes"
                    onChange={this.handleChange}
                    data-created={created}
                    defaultValue={notes}
                  />
                  
          <DialogEdit />
              </div>
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
              <a href={jobURL} target="_blank">
                <Typography>{jobURL}</Typography>
              </a>
            </ExpansionPanelActions>
          </ExpansionPanel>
        )}
      </Consumer>
    );
  }
}

Job.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Job);
