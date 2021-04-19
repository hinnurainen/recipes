import React, { Component } from 'react';
import { Switch, Route, } from "react-router-dom";

import Home from "./Home.js";
import Recipes from "./Recipes.js";
import About from "./About.js";

class Main extends Component {

    state = {
        firstname: "",
        lastname: "",
        number: "",
        role: "",
        snackname: "",
        recipes: [],
    };

    componentDidMount() {
        fetch('http://localhost:3001/recipes')
            .then(resp => resp.json())
            .then((data) => this.setState({ recipes: data }));
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/Home" exact component={Home} />
                    <Route path="/Recipes" component={Recipes} />
                    <Route path="/About" component={About} />
                </Switch>
            </div>
        )
    };
}

export default Main;