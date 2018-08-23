import React from 'react';
import { Link } from 'react-router-dom';

const DropDownMenu = () => {
  return (
    <div>
      Home
      <ul>
        <li>
          <Link to="/option1">Option1</Link>
        </li>
        <li>
          <Link to="/option2">Option2</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
