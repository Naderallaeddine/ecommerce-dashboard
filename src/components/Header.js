import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto NavBar-wrapper" >
            <Link to='/add'>Add product</Link>
            <Link to='/update'>Update Product</Link>
            <Link to='/login'>Login </Link>
            <Link to='/register'>Register</Link>
          </Nav>
        </Container>
      </Navbar>
       
    </div>
  )
}

export default Header