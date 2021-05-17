import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import MainNav from "./MainNav";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="justify-content-between px-5">
                <LinkContainer to="/" exact>
                    <Navbar.Brand className="logoheader">Hinnuraisen Huikopalat</Navbar.Brand>
                </LinkContainer>
                <MainNav />
            </Navbar>
        </div >
    );
};

export default Header;