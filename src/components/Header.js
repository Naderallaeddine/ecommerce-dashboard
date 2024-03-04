import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/register");
  }
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">E-commerce</Navbar.Brand>
          <Nav className="me-auto NavBar-wrapper">
            {localStorage.getItem("user-info") ? (
              <>
              <Link to="/">Product List</Link>
                <Link to="/add">Add product</Link>
                
                <Link to="/search">Search Product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login </Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
        </Container>
        {localStorage.getItem("user-info") ? (
          <Nav className="nav-drop">
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}

export default Header;
