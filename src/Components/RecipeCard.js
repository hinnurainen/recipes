import React from 'react';

const RecipeCard = (props) => {
    return (
        <div className="recipeslisted">
            <div className="recipecard">
                <h2>{props.snackname}</h2>
                <img src={props.image} alt={props.snackname} />
                <p>{props.ingredients}</p>
                <p>{props.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeCard;