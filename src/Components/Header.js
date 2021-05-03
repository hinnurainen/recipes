import React from 'react';
import Nav from "./Nav.js";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Hinnuraisen Huikopalat</Navbar.Brand>
            </Navbar>
        </div >
    );
};


export default Header;