import React from 'react';
import RecipeCard from './RecipeCard';
import RecipeSingle from './RecipeSingle';
import RecipeNew from './RecipeNew';

const RecipesList = ({ recipes }) => {
    return (
        <div className="posts">
            <h2>Snacks of all time:</h2>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    snackname={recipe.snackname}
                    ingredients={recipe.ingredients}
                    description={recipe.description}
                    link={recipe.id}
                />
            ))}
        </div>
    );
};

export default RecipesList;