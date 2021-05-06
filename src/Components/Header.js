import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import MainNav from "./MainNav";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Hinnuraisen Huikopalat</Navbar.Brand>
                <MainNav />
            </Navbar>
        </div >
    );
};

export default Header;