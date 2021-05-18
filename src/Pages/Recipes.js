import React, { useState, useEffect } from 'react';
import axios from "axios";
import RecipesList from "../Components/RecipesList";
import SearchBox from '../Components/SearchBox';
import RecipeSingle from '../Components/RecipeSingle';
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    let { url } = useRouteMatch();

    useEffect(() => {
        axios
            .get("https://secure-springs-28413.herokuapp.com/recipe/all")
            .then((res => setRecipes(res.data)));
    }, []);

    const searchValueHandler = (e) => {
        setSearchInput(e.target.value);
    }

    const recipeFilter = recipes.filter((recipe) => {
        return recipe.snackname.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase());
    });

    return (
        <div>
            <Switch>
                <Route path={`${url}/:id`}>
                    <RecipeSingle />
                </Route>
                <Route path={url} exact>
                    <SearchBox search={searchValueHandler} />
                    <RecipesList recipes={recipeFilter} />
                </Route>
            </Switch>
        </div >
    );
};

export default Recipes;