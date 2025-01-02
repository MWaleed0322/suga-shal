import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar expand="md" className="rounded ">
        <Container>
          <Navbar.Brand href="/">
            <span className="self-center text-xl font-semibold">Suga Shal</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto menuSec">
              <Nav.Link href="/">Home </Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/career">Careers</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex">
            <Button>Get started</Button>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
