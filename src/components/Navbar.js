import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../logo/logowhite.jpg"

export default function CustomNavbar() {
  let navigate = useNavigate()
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  let location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/" className="mx-3">
      <img 
  src={logo}
  alt="Logo"
  height={"40px"}
  width={"120px"}
  style={{ borderRadius: "5px"}} 
/>


      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto mx-4">
          <Nav.Link
            className={`nav-link ${
              location.pathname === "/home" ? "active" : ""
            }`}
            href="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            href="/about"
          >
            About
          </Nav.Link>
        </Nav>
        {!localStorage.getItem('token')?
        <Nav className="mx-3">
          <Nav.Link href="/signup">
            <button className="btn btn-outline-warning ">Signup</button>
          </Nav.Link>
          <Nav.Link href="/login">
            <button className="btn btn-outline-warning">Login</button>
          </Nav.Link>
        </Nav>: <button onClick={handleLogout} className="btn btn-outline-warning mx-5">Logout</button>}
      </Navbar.Collapse>
    </Navbar>
  );
}
