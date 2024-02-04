import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import Logo from './../../media/Images/meta.png'

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
        <Navbar.Brand href="/"><img src={Logo} alt='Logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/single-post">Single Post</Nav.Link>
            <Nav.Link href="/pages">Pages</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
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
