import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

import './Recipes.css';


class Recipes extends Component {

    state = {
        recipes: [],
        searchInput: "",
    };

    SearchBox = (props) => {
        return (
            <div>
                <input type="text" onChange={props.search} placeholder="Snack time?" />
            </div>
        );
    };

    searchValueHandler = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    componentDidMount() {
        fetch("http://localhost:3001/recipes")
            .then(resp => resp.json())
            .then((data) => this.setState({ recipes: data }));
    };

    render() {
        const recipeFilter = this.state.recipes.filter(
            recipe => {
                return recipe.snackname.toLocaleLowerCase().includes(this.state.searchInput.toLocaleLowerCase());
            }
        );
        const recipesList = recipeFilter.map((recipe) => { return (<RecipeCard snackname={recipe.snackname} key={recipe.id} image={recipe.image} ingredients={recipe.ingredients} instructions={recipe.instructions} />) })

        return (
            <div>
                <h1>This is recipes page</h1>
                <this.SearchBox search={this.searchValueHandler} />
                <div>
                    {recipesList}
                </div>
            </div >
        );
    }
}

export default Recipes;