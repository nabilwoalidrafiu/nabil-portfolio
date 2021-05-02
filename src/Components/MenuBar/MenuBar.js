import "./MenuBar.css";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menubar = () => {
  return (
    <Navbar className="navbar-section" expand="lg">
    <Navbar.Brand href="#home" className="text-primary">Nabil Woalid Rafiu</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto mainMenu">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/#about">About</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="https://drive.google.com/file/d/1B4_EmJrtFeyJEyRKeWGrnAZuhPZNYzIo/edit">Resume</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Menubar;