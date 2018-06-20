import React, { createContext, Component } from "react";
import initialState from "./initialState";
import { Map } from "immutable";

const AppContext = createContext();
const Consumer = AppContext.Consumer;

class Provider extends Component {
  state = initialState;
  actions = {
    add_job: data => {
      this.setState(({jobList}) => ({
        jobList: jobList.push(new Map (data))
      }))
    },
    edit_job: (id, key, value) => {
      this.setState(({jobList}) => ({
        jobList: jobList.update(
          jobList.findIndex(item => item.get("created") === id),
          item => item.set(key, value)
        )
      }));
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
