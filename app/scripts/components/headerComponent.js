import React, { Component } from 'react';
import { Navbar, Nav, CollapsibleNav, NavItem, Glyphicon } from 'react-bootstrap';

export default class HeaderComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Emeric Generator</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
        </Nav>
      </Navbar>
    );
  }

}
