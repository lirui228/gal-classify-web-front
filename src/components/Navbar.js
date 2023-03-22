import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" style={{height: "1.2cm"}}>

      
      <Navbar.Brand href="/">GaLaxy</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">主页</Nav.Link>
        <Nav.Link href="/services">星系</Nav.Link>
        <Nav.Link href="/products">论坛</Nav.Link>
      </Nav>
      <Nav className="ms-auto">
        <Button variant="outline-light" size="sm" className="me-2" >登录</Button>
        <Button variant="outline-light" size="sm">注册</Button>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;