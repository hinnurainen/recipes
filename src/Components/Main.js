import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import About from "../Pages/About.js";

const Main = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col></Col>
                <Col xs={6}>
                    <Switch>
                        <Route path="/Home" exact component={Home} />
                        <Route path="/Recipes" component={Recipes} />
                        <Route path="/About" component={About} />
                    </Switch>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Main;