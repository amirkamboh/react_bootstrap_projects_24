import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import Logo from './../../media/Images/meta.png'
import { Link } from 'react-router-dom';

const Header = () => {

/* $(document).ready(function(){
          $("#selector").change(function(){
          $("body").toggleClass("bg-secondary");
          $(".custom-control-label").toggleClass("text-white");
        });
}); */

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand><Link to='/'><img src={Logo} alt='Logo'></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link to='/' className='Nav_Bar'>Home</Link>
            </Nav.Link>
            <Nav.Link><Link to='/blog' className='Nav_Bar'>Blog</Link></Nav.Link>
            <Nav.Link><Link to="/single-post" className='Nav_Bar'>Single Post</Link></Nav.Link>
            <Nav.Link><Link to='/pages' className='Nav_Bar'>Pages</Link></Nav.Link>
            <Nav.Link><Link to='/contact' className='Nav_Bar'>Contact</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
          </Form>
          <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
