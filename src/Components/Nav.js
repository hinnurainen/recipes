import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <LinkContainer to="/#">
                <Navbar.Brand>Hinnuraisen Huikopalat</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Nav;

