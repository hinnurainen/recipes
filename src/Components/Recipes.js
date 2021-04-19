import React from 'react';
import SearchBox from './SearchBox';

const Recipes = ({ recipes }) => {
    return (
        <div>
            <h1>This is recipes page</h1>
            <ul>
                {recipes.map(recipe => {
                    return (
                        <li key={recipe.id}>{recipe.snackname}</li>)
                })}
            </ul>
        </div>
    );
};

export default Recipes;