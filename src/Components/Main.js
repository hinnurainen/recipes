import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import Addrecipe from '../Pages/AddRecipe';
import About from "../Pages/About";


const Main = () => {
    return (
        <Container className="maincontainer">
            <Row className="mt-5">

                {/* <Col xs={6}> */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/recipes" component={Recipes} />
                    <Route path="/addrecipe" component={Addrecipe} />
                    <Route path="/about" component={About} />
                </Switch>
                {/* </Col> */}

            </Row>
        </Container>
    );
}

export default Main;