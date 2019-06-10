import React from 'react';
import './menu.css';
import {Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
const Menu = props =>(
  <header className="toolbar" >
    <nav className="toolbar__navigation" style = {{display: 'flex', justifyContent: 'flex'}}>
  <Navbar >
    <Navbar.Brand href="#home">Heptagon</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="./components/imageLink/imageLink" >Home</Nav.Link>
      <Nav.Link href="buyer" >BUYER</Nav.Link>
      <Nav.Link href="seller" s>SELLER</Nav.Link>
    </Nav>
    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light" >Search</Button>
    </Form>
  </Navbar>
    </nav>
  </header>
)
export default Menu;