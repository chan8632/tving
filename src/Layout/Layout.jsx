import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} to="/" className="m-3">
          Movie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Moives
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Layout;
