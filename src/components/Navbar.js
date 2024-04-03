import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {  useLocation} from 'react-router-dom';





export default function CustomNavbar() {
  let location = useLocation();
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="/" className='mx-3'>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-4">
            <Nav.Link className={`nav-link ${location.pathname==="/home" ? "active" : ""}`} href="/">Home</Nav.Link>
            <Nav.Link className={`nav-link ${location.pathname==="/about" ? "active" : ""}`} href="/about">About</Nav.Link>
          </Nav>
          <Nav className='mx-3'>
            <Nav.Link  href="/signup"><button className="btn btn-outline-warning">Signup</button></Nav.Link>
            <Nav.Link  href="/login"><button className="btn btn-outline-warning">Login</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  );
}

