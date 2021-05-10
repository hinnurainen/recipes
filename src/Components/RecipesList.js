import React from 'react';
import RecipeCard from './RecipeCard';


const RecipesList = ({ recipes }) => {


    return (

        <div className="posts">
            <h2>The greatest snacks of all time:</h2>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    snackname={recipe.snackname}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    link={`${recipe.id}`}
                />
            ))}
        </div>
    );
};

export default RecipesList;