import React from 'react';
import { Switch, Route, } from "react-router-dom";

import Home from "./Home.js";
import Recipes from "./Recipes.js";
import About from "./About.js";

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/Recipes" component={Recipes} />
                <Route path="/About" component={About} />
            </Switch>
        </div>
    );
};

export default Main;