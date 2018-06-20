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
      jobDescription: "https://www.google.com"
    })
  ])
};

// const list = new List([new Map({ daniel: 100 }), new Map({ goku: 9000 })]);
// const list2 = list.update(
//   list.findIndex(item => item.get("daniel") === 100),
//   item => item.set("daniel", "coolest kid around")
// );
// console.log(list.toJS(), list2.toJS());

export default initialState;
