import React from 'react';
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navStyle = {
  backgroundColor: 'papayawhip'
};

//Using a react-bootstrap Navbar and dropdown menu as the instructions said I could use any npm module I wanted
const NavBar = () => {
  return (
    <Navbar style={navStyle}>
      <Nav>
        <NavDropdown title="Home" id="basic-nav-dropdown">
          <LinkContainer to="/option1">
            <NavItem>Option1</NavItem>
          </LinkContainer>
          <LinkContainer to="/option2">
            <NavItem>Option2</NavItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
