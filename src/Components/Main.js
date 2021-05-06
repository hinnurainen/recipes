import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import About from "../Pages/About";

const Main = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col></Col>
                <Col xs={6}>
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/recipes" component={Recipes} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Main;