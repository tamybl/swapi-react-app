import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = (props) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
          <Navbar.Brand>
            <a href="#" className="logo"><img src={props.imageBrand} title={props.title} className="img-responsive"/></a>
          </Navbar.Brand>
        <Navbar.Toggle />
     </Navbar.Header>
     <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            link 1
          </NavItem>
          <NavItem eventKey={2} href="#">
            link 2
          </NavItem>
        <NavDropdown eventKey={3} title="dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>

        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Registrarse
        </NavItem>
        <NavItem eventKey={2} href="#">
          Iniciar Sesión
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );

export default Navigation;