import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
  Button
} from "@material-ui/core";
import { Consumer } from "../../Context";
import { Map } from "immutable";
import { Object } from "core-js";

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
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

class NewJobModal extends Component {
  state = 
  // new Map ( 
    {
      open: false,
      interviewStatus: '',
      interviewDate:'',
      companyName: '',
      jobTitle: '',
      salaryRate: ''
    }
  // )

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    console.log(`NAME: ${e.target.name}`, `VALUE: ${e.target.value}`)
    const modState = {};
    modState[e.target.name] = e.target.value;
    console.log(modState);
    this.setState((prevState, props) => {
      // return Object.assign(prevState, modState)
      // // access the previous state
      // const newState = prevState.set(e.target.name, e.target.value);
      // // set key on state with value of target
      // // use new immutable object in setState return
      // return newState;
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Consumer>
        {({actions}) => {
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
                <div className={classes.paper}>
                  <Typography variant="title" id="modal-title">
                    Add A New Job
                  </Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="companyName">Company</InputLabel>
                    <Input id="companyName" name="companyName" onChange={this.handleChange}/>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
                    <Input id="jobTitle" name="jobTitle" onChange={this.handleChange}/>
                  </FormControl>
                  <FormControl
                    fullWidth
                    className={classNames(
                      classes.margin,
                      classes.withoutLabel,
                      classes.textField,
                      classes.formControl
                    )}
                  >
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
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => actions.add_newJob()}
                  >
                    Submit
                  </Button>
                </div>
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
