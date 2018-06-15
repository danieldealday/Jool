import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Add as NewIcon } from "@material-ui/icons";
import {
  Modal,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  Paper,
  Divider
} from "@material-ui/core";
import { Consumer } from "../../Context";
import moment from "moment";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  formControl: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class NewJobModal extends Component {
  state = {
    open: false,
    interviewStatus: "Active",
    interviewDate: moment().format("MM/DD/YYYY"),
    companyName: "",
    jobTitle: "",
    salaryRate: ""
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      interviewStatus: "Active",
      interviewDate: moment().format("MM/DD/YYYY"),
      companyName: "",
      jobTitle: "",
      salaryRate: ""
    });
  };

  handleChange = e => {
    const modState = {};
    modState[e.target.name] = e.target.value;
    this.setState((prevState, props) => Object.assign(prevState, modState));
  };

  render() {
    const { classes } = this.props;
    return (
      <Consumer>
        {({ actions }) => {
          return (
            <div>
              <ListItem button onClick={this.handleOpen}>
                <ListItemIcon>
                  <NewIcon />
                </ListItemIcon>
                <ListItemText primary="New" />
              </ListItem>

              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
              >
                <Paper elevation={4} className={classes.paper}>
                  <Typography variant="title" id="modal-title">
                    Track New Jool
                  </Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="companyName">Company</InputLabel>
                    <Input
                      id="companyName"
                      name="companyName"
                      onChange={this.handleChange}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      onChange={this.handleChange}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="salaryRate">Salary Rate</InputLabel>
                    <Input
                      id="salaryRate"
                      name="salaryRate"
                      onChange={this.handleChange}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                  <Divider />
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => {
                      this.handleClose();
                      actions.add_newJob(this.state);
                    }}
                  >
                    Add
                  </Button>
                </Paper>
              </Modal>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

NewJobModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewJobModal);
