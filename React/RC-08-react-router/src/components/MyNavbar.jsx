import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../img/logo.png'
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Teacher</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar