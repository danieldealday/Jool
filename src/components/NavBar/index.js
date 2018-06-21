import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Schedule as ScheduleIcon,
  Contacts as ContactsIcon,
  Work as JobsIcon,
  Business as CompaniesIcon
} from "@material-ui/icons";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import {NewJobModal} from "../Modal";

// TODO: create mapped return from object for components

const NavBar = () => (
  <Fragment>
    <NewJobModal />
    <Divider />
    <Link to="/jobs">
      <ListItem button>
        <ListItemIcon>
          <JobsIcon />
        </ListItemIcon>
        <ListItemText primary="Jobs" />
      </ListItem>
    </Link>
    <Link to="/contacts">
      <ListItem button>
        <ListItemIcon>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
    </Link>
    <Link to="/schedule">
      <ListItem button>
        <ListItemIcon>
          <ScheduleIcon />
        </ListItemIcon>
        <ListItemText primary="Schedule" />
      </ListItem>
    </Link>
    <Link to="/companies">
      <ListItem button>
        <ListItemIcon>
          <CompaniesIcon />
        </ListItemIcon>
        <ListItemText primary="Companies" />
      </ListItem>
    </Link>
  </Fragment>
);

export default withStyles()(NavBar);
