import React, { Component } from 'react';
import RecipeCard from './RecipeCard';


class Recipes extends Component {

    state = {
        recipes: [],
        isLoading: false,
        searchInput: "",
    };

    SearchBox = (props) => {
        return (
            <div>
                <input type="text" onChange={props.search} placeholder="What to prepare..." />
            </div>
        );
    };

    searchValueHandler = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('http://localhost:3001/recipes')
            .then(resp => resp.json())
            .then((data) => this.setState({ recipes: data }));
    };

    render() {
        const recipesList = this.state.recipes.map((recipe) => { return (<RecipeCard snackname={recipe.snackname} key={recipe.id} image={recipe.image} ingredients={recipe.ingredients} instructions={recipe.instructions} />) })

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