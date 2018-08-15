import React from 'react';
import PropTypes from 'prop-types';

const labelStyle = {
  marginLeft: "10px",
  marginRight: "10px"
}

const inputStyle = {
  margin: "10px"
}

const Input = ({ input, value, action, name }) => {
  return (
    <div>
      <label style={labelStyle}>
        {input}
        <input
          style={inputStyle}
          type="text"
          name={name}
          defaultValue={value}
          onChange={action} />
      </label>
    </div>
  )
}

Input.PropTypes = {
  input: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Input;