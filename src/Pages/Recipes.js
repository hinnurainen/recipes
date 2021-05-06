import React, { useState, useEffect } from 'react';
import axios from "axios";
import RecipesList from "../Components/RecipesList";
import RecipeForm from '../Components/RecipeForm';
import SearchBox from '../Components/SearchBox';
import RecipeSingle from '../Components/RecipeSingle';
import { Switch, Route } from "react-router-dom";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3001/recipes")
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
                <Route path="/:id">
                    <RecipeSingle />
                </Route>
                <Route path="/" exact>
                    <SearchBox search={searchValueHandler} />
                    <RecipesList recipes={recipeFilter} />
                    <RecipeForm />
                </Route>
            </Switch>
        </div >
    );
};

export default Recipes;