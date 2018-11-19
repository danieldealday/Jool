import React, { Fragment } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography
} from "@material-ui/core";

const Form = (props) => {
  const data = props.data;
  return (
    <Fragment>
      <Button>Job Status</Button>
      <Typography variant="body1">
        {data.jobTitle}
      </Typography>
      <FormControl >
        <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
        <Input
          id="jobTitle"
          name="jobTitle"
          value={data.jobTitle}
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="companyName">Company Name</InputLabel>
        <Input
          id="companyName"
          name="companyName"
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="location">Location</InputLabel>
        <Input
          id="location"
          name="location"
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="salary">Salary</InputLabel>
        <Input
          id="salary"
          name="salary"
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="applicationDate">Application Date</InputLabel>
        <Input
          id="applicationDate"
          name="applicationDate"
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="nextAppointment">Next Appointment</InputLabel>
        <Input
          id="nextAppointment"
          name="nextAppointment"
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          name="email"
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="phone">Phone</InputLabel>
        <Input
          id="phone"
          name="phone"
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="notes">Notes</InputLabel>
        <Input
          id="notes"
          name="notes"
          multitline
          fullWidth={true}
          rowsMax={20}
          rows={20}
        />
      </FormControl>
    </Fragment>
  );
};

export default Form;
