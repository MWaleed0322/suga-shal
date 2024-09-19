import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <div className="menuSec">
        <Container>
          <Navbar fixed='top' expand="md">
            <Container>
              {/* Logo */}
              <Navbar.Brand href="index.html">Suga Shal</Navbar.Brand>

              {/* Navbar Toggle for mobile view */}
              <Navbar.Toggle aria-controls="menu" />

              {/* Navbar Links */}
              <Navbar.Collapse id="menu">
                <Nav className="mx-auto">
                  <Nav.Link href="index.html">Home</Nav.Link>
                  <Nav.Link href="about.html">About</Nav.Link>
                  <Nav.Link href="menu.html">Menu</Nav.Link>
                  <Nav.Link href="career.html">Careers</Nav.Link>
                  <Nav.Link href="contact.html">Contact</Nav.Link>
                </Nav>
                {/* Button */}
                <div className="text-right">
                  <Button href="#" className="theme1">Place Order</Button>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </header >
  );
};

export default Header;
