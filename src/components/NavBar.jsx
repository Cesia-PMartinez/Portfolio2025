import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <span 
            className="navbar-text-logo"
            style={{ 
              fontFamily: 'WindSong',
              fontSize: '20px',
              fontWeight: 'normal', 
              color: 'white', 
              lineHeight: '1' 
            }}
          >
            CesiaPineda*
          </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links-style">
            
            <Nav.Link href="#home-section" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about-section" className="nav-link-custom">About Me</Nav.Link>
            <Nav.Link href="#skills-section" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#projects-section" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#footer-section" className="nav-link-custom">Contact Me</Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;