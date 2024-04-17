<template>
    <div v-if="recipe" class="recipe-detail">
      <h1>{{ recipe.title }}</h1>
      <div v-if="recipe.images.length > 0">
        <img :src="recipe.images[0].image_url" :alt="recipe.title" class="recipe-image" />
      </div>
      <div class="recipe-metadata">
        <p><strong>Cooking Time:</strong> {{ recipe.cooking_time }} minutes</p>
        <p><strong>Total Price:</strong> ${{ recipe.calculated_total_price }}</p>
        <p><strong>Description:</strong> {{ recipe.description }}</p>
        <p><strong>Servings:</strong> {{ recipe.servings }}</p>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul>
          <li v-for="ingredient in recipe.recipe_ingredients" :key="ingredient.id">
            {{ ingredient.quantity }} {{ ingredient.name }}
          </li>
        </ul>
      </div>
      <div>
        <h2>Instructions</h2>
        <ol>
          <li v-for="step in recipe.instructions" :key="step.id">
            {{ step.description }}
          </li>
        </ol>
      </div>
      <div>
        <h2>Equipment Needed</h2>
        <ul>
          <li v-for="equipment in recipe.equipment" :key="equipment.id">
            {{ equipment.name }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'],
    data() {
      return {
        recipe: null
      };
    },
    created() {
      this.fetchRecipeDetails();
    },
    methods: {
      fetchRecipeDetails() {
        axios.get(`http://localhost:8000/api/recipes/${this.id}/`)
          .then(response => {
            this.recipe = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the recipe details:", error);
          });
      }
    }
  };
  </script>
  
  <style>
  .recipe-detail {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .recipe-detail h1, h2 {
    color: #333;
  }
  
  .recipe-image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .recipe-metadata p, .recipe-detail ul, .recipe-detail ol {
    margin-left: 20px;
  }
  
  .recipe-detail ul, .recipe-detail ol {
    list-style-type: none;
  }
  
  .recipe-detail li {
    padding: 5px 0;
  }
  </style>
  