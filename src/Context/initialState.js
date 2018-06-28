import { Map, List } from "immutable";
import moment from "moment";

const initialState = {
  jobList: new List([
    new Map({
      created: Date.now(),
      lasteEditted: this.created,
      interviewStatus: "Applied",
      applicationDate: moment().format("MM/DD/YYYY"),
      nextAppointmentDate: "n/a",
      companyName: "Google",
      jobTitle: "Software Engineer",
      location: "Los Angeles, CA",
      salaryRate: 80000,
      jobURL: "https://www.google.com",
      hiringManager: "John Smith",
      contactEmail: "john.smith@google.com",
      contactPhone: "(310) 987-4321",
      notes: "Default notes passed from application state."
    })
  ])
};

export default initialState;
