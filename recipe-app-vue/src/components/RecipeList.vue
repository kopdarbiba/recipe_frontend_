<template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <RecipeDetails v-for="recipe in recipes" :key="recipe.title" :recipe="recipe" />
      </div>
    </div>
  </template>
  
  <script>
  import RecipeDetails from './RecipeDetails.vue'; // Import the RecipeDetails component
  import axios from 'axios';
  
  export default {
    data() {
      return {
        recipes: [],
        loading: true,
      };
    },
    mounted() {
      axios.get('http://13.49.33.156/recipes/complexSearch/?dietary_preferences=keto&lang=en')
        .then(response => {
          this.recipes = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    components: {
      RecipeDetails, // Register the RecipeDetails component
    },
  };
  </script>
  