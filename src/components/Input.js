import React from 'react';

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

export default Input;