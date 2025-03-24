import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Menura Maneth</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
