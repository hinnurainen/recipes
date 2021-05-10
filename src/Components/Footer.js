import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
    return (
        <Container fluid="true">
            <Navbar bg="dark" variant="dark">
                <p className="text-white">&copy; 2021 Heidi MÄÄ</p>
            </Navbar>
        </Container>
    );
};

export default Footer;