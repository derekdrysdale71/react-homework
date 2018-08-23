import React from 'react';
import { InputContext } from './InputProvider';
import Input from './Input';

const UserView = props => {
  return (
    <div>
      <InputContext.Consumer>
        {context => (
          <Input
            label={context.input1}
            value={props.value1}
            action={props.action}
            name="value1"
          />
        )}
      </InputContext.Consumer>
      <InputContext.Consumer>
        {context => (
          <Input
            label={context.input2}
            value={props.value2}
            action={props.action}
            name="value2"
          />
        )}
      </InputContext.Consumer>
    </div>
  );
};

export default UserView;
