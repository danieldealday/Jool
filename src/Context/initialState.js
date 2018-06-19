import { Map, List } from "immutable";
import moment from "moment";

const initialState = {
  jobList: new List([
    new Map({
      created: Date.now(),
      lasteEditted: this.created,
      interviewStatus: "Active",
      applicationDate: moment().format("MM/DD/YYYY"),
      nextAppointmentDate: "n/a",
      companyName: "Google",
      jobTitle: "Software Engineer",
      location: "Los Angeles, CA",
      salaryRate: 80000,
      jobDescription: "https://www.google.com"
    })
  ])
};

export default initialState;
