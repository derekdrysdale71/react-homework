import React from 'react';
import PropTypes from 'prop-types';

const labelStyle = {
  marginLeft: '10px',
  marginRight: '10px'
};

const inputStyle = {
  margin: '10px'
};

const Input = ({ label, name, value, type, action }) => {
  return (
    <div>
      <label style={labelStyle}>
        {label}
        <input
          style={inputStyle}
          type={type}
          name={name}
          defaultValue={value}
          onChange={action}
        />
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
