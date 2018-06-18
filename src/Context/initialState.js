import { Map, List } from "immutable";

const initialState = {
  jobList: new List ([
    new Map ({
      created: Date.now(),
      lasteEditted: this.created,
      interviewStatus: "Active",
      interviewDate: "07/04/2018",
      companyName: "Google",
      jobTitle: "Software Engineer",
      location: "Los Angeles, CA",
      salaryRate: 80000,
      jobDescription: "https://www.google.com"
    })
  ])
};

export default initialState;