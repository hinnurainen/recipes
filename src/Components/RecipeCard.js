import React from 'react';
import { Link } from "react-router-dom";
import { useRouteMatch } from 'react-router-dom';

import './RecipeCard.css';

const RecipeCard = ({ snackname, link, image, instructions }) => {
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    };
    let { url } = useRouteMatch();

    return (
        <div className="list">
            <div className="card">
                <h3>{snackname}</h3>
                <img className="cardimg" src={`../Assets/${image}`} alt={snackname} width="208" height="250" />

                <p>{truncate(instructions, 15)} ...</p>
                <Link to={`${url}/${link}`} className="cardlink">See ingredients</Link>
            </div>
        </div>
    );
};

export default RecipeCard;