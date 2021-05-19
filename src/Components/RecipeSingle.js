import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import Button from "react-bootstrap/Button";

const RecipeSingle = () => {
    const [recipe, setRecipe] = useState();
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        if (!recipe) {
            axios.get('https://secure-springs-28413.herokuapp.com/recipe/find/' + id)
                .then((res) => setRecipe(res.data));
        }
    });
    console.log(recipe);

    let recipeData = undefined;

    if (!recipe) {
        recipeData = <h1>Loading recipe...</h1>
    }
    if (recipe) {
        let ingredientList = recipe.ingredients.map((ingredient) => {
            return <p>{ingredient.ingName}</p>
        })

        recipeData = (
            <>
                <div className="recipe">
                    <h1>{recipe.snackname}</h1>
                    <img src={`../Assets/${recipe.image}`} alt={recipe.snackname} width="500" height="600" />
                    {ingredientList}
                    <p>{recipe.instructions}</p>
                </div>
                <Button variant="outline-info" onClick={() => history.goBack()}>
                    Back to recipes
        </Button>
            </>
        );
    }
    return (
        <div>{recipeData}</div>)
};

export default RecipeSingle;