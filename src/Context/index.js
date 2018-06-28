import React, { createContext, Component } from "react";
import initialState from "./initialState";
import { Map } from "immutable";

const AppContext = createContext();
const Consumer = AppContext.Consumer;

class Provider extends Component {
  state = initialState;
  actions = {
    JOB_ADD: data => {
      this.setState(({jobList}) => ({
        jobList: jobList.push(new Map (data))
      }))
    },
    JOB_EDIT: async (id, key, data) => {
      await this.setState(({jobList}) => ({
        jobList: jobList.update(
          jobList.findIndex(item => item.get("created") === id),
          item => item.set(key, data)
        )
      }));
    }
    // const modState = {};
    // modState[e.target.name] = e.target.value;
    // this.setState((prevState, props) => Object.assign(prevState, modState));
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
