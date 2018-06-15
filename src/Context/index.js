import React, { createContext, Component } from "react";
import initialState from "./initialState";
import { Map } from "immutable";

const AppContext = createContext();
const Consumer = AppContext.Consumer;

class Provider extends Component {
  state = initialState;
  actions = {
    add_newJob: data => {
      this.setState(({jobList}) => ({
        jobList: jobList.push(new Map (data))
      }))
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
