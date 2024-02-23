import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch recipes from DRF backend
        axios.get('/recipes/complexSearch/')
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.title}>
                        <h3>{recipe.title}</h3>
                        <p>Description: {recipe.description}</p>
                        <p>Cuisine: {recipe.cuisine}</p>
                        <p>Occasion: {recipe.occasion}</p>
                        {/* Add more information as needed */}
                        <p>Cooking Time: {recipe.cooking_time} minutes</p>
                        <p>Servings: {recipe.servings}</p>
                        {/* Display the image if available */}
                        {recipe.images.length > 0 && (
                            <img
                                src={recipe.images[0].thumbnail_url}  // Use the thumbnail URL here
                                alt={recipe.title}
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        )}
                        {/* Add other details you want to display */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
