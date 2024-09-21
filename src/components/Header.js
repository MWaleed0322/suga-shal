import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="md" className="rounded">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center text-xl font-semibold">Flowbite React</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex">
          <Button variant="primary">Get started</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
