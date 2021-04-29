import React from 'react';
import { Link } from 'react-router-dom';

import './RecipeCard.css';

const RecipeCard = ({ snackname, image, ingredients }) => {
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    };

    return (
        <div className="recipeslist">
            <div className="recipecard">
                <h2>{snackname}</h2>
                <img src={image} alt={snackname} />
                <p>{ingredients}</p>

                <p>{truncate(ingredients, 30)} ...</p>
                <Link to={`/${snackname}`}>See the recipe</Link>
            </div>
        </div>
    );
};

export default RecipeCard;