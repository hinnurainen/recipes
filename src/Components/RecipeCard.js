import React from 'react';
import { Link } from 'react-router-dom';

import './RecipeCard.css';

const RecipeCard = ({ snackname, description }) => {
    return (
        <div>
            {snackname} {description}
        </div>
    );
};

export default RecipeCard;