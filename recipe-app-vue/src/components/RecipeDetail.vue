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
  
  <script setup>
  import { ref, onMounted } from 'vue';

  const API_URL = 'http://localhost:8000/api/recipes'
  const id = props.id;
  const recipe = ref(null);
  
  const fetchRecipeDetails = () => {
    axios.get(`http://localhost:8000/api/recipes/${id}/`)
      .then(response => {
        recipe.value = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the recipe details:", error);
      });
  };
  
  onMounted(fetchRecipeDetails);
  </script>
  