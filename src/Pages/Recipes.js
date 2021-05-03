import React, { useState, useEffect } from 'react';
import axios from "axios";
import RecipesList from "../Components/RecipesList";
import RecipeCard from "../Components/RecipeCard";
import RecipeForm from '../Components/RecipeForm';
import SearchBox from '../Components/SearchBox';

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

    const recipesList = recipeFilter.map((recipe) => { return (<RecipeCard snackname={recipe.snackname} key={recipe.id} image={recipe.image} ingredients={recipe.ingredients} instructions={recipe.instructions} />) })

    return (
        <div>
            <SearchBox search={searchValueHandler} />
            <RecipesList recipes={recipeFilter} />
            <RecipeForm />
        </div >
    );
};

export default Recipes;