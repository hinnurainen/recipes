import React from 'react';
import RecipeCard from './RecipeCard';

import './RecipesList.css'


const RecipesList = ({ recipes }) => {


    return (

        <div className="posts">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    snackname={recipe.snackname}
                    image={recipe.image}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    link={`${recipe.id}`}
                />
            ))}
        </div>
    );
};

export default RecipesList;