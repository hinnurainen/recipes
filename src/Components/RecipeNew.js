import React from "react";


const RecipeNew = ({ change, submit }) => {
    return (
        <form onSubmit={submit}>
            <label>Snackname </label>
            <input type="text" name="snackname" onChange={change} />

            <label>Image url </label>
            <input type="url" name="image" onChange={change} />

            <label>Ingredients </label>
            <textarea type="text" name="ingredients" onChange={change} />

            <label>Instructions</label>
            <textarea type="text" name="instructions" onChange={change} />

            <button type="submit">Add new recipe </button>
        </form>
    );
};

export default RecipeNew;