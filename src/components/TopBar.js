import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


export default function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="instacart log"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav className="">
                    <Nav.Link  href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

