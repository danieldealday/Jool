import React, { createContext, Component } from "react";
import initialState from "../initialState";

const AppContext = createContext();
const Consumer = AppContext.Consumer;

class Provider extends Component {
  state = initialState;
  render() {
    return (
      <AppContext.Provider value={{ state: this.state, actions: this.actions }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { Consumer, Provider };
