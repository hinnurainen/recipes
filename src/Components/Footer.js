import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
    return (
        <Container fluid="true" className="footer">
            <Navbar bg="dark" variant="dark" className="justify-content-center" fixed="bottom">
                <p className="text-white">&copy; 2021 <img src="Koko lammaslogo (1).png" alt="sheeplogo" /></p>
            </Navbar>
        </Container>
    );
};

export default Footer;