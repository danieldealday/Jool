import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Add as NewIcon } from "@material-ui/icons";
import {
  Modal,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, 50%)`
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
            <Typography variant="subheading" id="simple-modal-description">
              New Job Form Control Here
            </Typography>
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