import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/TheatreLK.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="TheatreLK Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header