import React from 'react';
import { InputContext } from './InputProvider';
import Input from './Input';

const aboutStyle = {
  margin: '10px'
};

const ReusableComponent = props => {
  return props.action ? (
    <div>
      <InputContext.Consumer>
        {context => (
          <Input
            input={context.input1}
            value={props.value1}
            action={props.action}
            name="value1"
          />
        )}
      </InputContext.Consumer>
      <InputContext.Consumer>
        {context => (
          <Input
            input={context.input2}
            value={props.value2}
            action={props.action}
            name="value2"
          />
        )}
      </InputContext.Consumer>
    </div>
  ) : (
    <div style={aboutStyle}>
      <h3>Hello world</h3>
    </div>
  );
};

export default ReusableComponent;
