import React from 'react';
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap';
import styles from './navbar.module.css';
export const NavBarHeader =() =>{
    return(<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><div className={styles.logoNav}><img src="/images/rapiscan_ltd_1.png" width="75"/><h4> ESIL - Rapiscan Ltd</h4></div></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <NavDropdown title="Company" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Corporate Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Management</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Corporate Social Responsibility</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Products" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">X-Ray Baggage Scanners</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Explosive Trace Detectors</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Door Frame Metal Detectors</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Hand Held Metal Detectors</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Vehicle Mounted X-Ray Baggage Scanners</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Login</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Register
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>)
}