import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

const MainNav = () => {
    return (
        <Nav>
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/recipes">
                <Nav.Link>Recipes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/addrecipe">
                <Nav.Link>Add a recipe</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
        </Nav>
    );
};

export default MainNav;

