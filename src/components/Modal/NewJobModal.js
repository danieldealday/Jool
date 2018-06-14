import React from "react";
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
  InputAdornment
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
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
  }
});

class NewJobModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
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
              <InputLabel htmlFor="company">Company</InputLabel>
              <Input id="company" />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="job-title">Job Title</InputLabel>
              <Input id="job-title" />
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
              <InputLabel htmlFor="salary-rate">Salary Rate</InputLabel>
              <Input
                id="salary-rate"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </div>
        </Modal>
      </div>
    );
  }
}

NewJobModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewJobModal);
