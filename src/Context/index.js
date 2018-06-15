import React, { createContext, Component } from "react";
import initialState from "./initialState";
import { Map } from "immutable";

const AppContext = createContext();
const Consumer = AppContext.Consumer;

class Provider extends Component {
  state = initialState;
  actions = {
    add_newJob: data => {
      this.setState(({jobList}) => {
        console.log("DATA: ", data);
        console.log("JOBLIST: ", jobList);
        return {
          jobList: jobList.push(new Map(data))
        }
      });
      // this.setState(({data}) => ({
      //   data: data.update('items', list => list.push(data.get('count')))
      // }));
    }
  };
  render() {
    return (
      <AppContext.Provider value={{ state: this.state, actions: this.actions }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { Consumer, Provider };
