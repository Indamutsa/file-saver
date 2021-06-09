import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="">
      <Navbar.Brand as={Link} to="/">
        WDS Drive
      </Navbar.Brand>
      <Navbar.Brand as={Link} to="/user">
        Profile
      </Navbar.Brand>
    </Navbar>
  );
}
