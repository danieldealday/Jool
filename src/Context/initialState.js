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
      salaryRate: 80000
    })
  ])
};

export default initialState;