import React, { Component, createContext } from 'react';

export const InputContext = createContext();

class InputProvider extends Component {
  state = {
    input1: 'Name',
    input2: 'Email'
  }

  render() {
    return (
      <InputContext.Provider value={this.state}>
        {this.props.children}
      </InputContext.Provider>
    )
  }
}

export default InputProvider;