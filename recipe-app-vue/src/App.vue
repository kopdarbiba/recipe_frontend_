<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="recipe in recipes" :key="recipe.title">
        <h1>{{ recipe.title }}</h1>
        <p>{{ recipe.description }}</p>
        <p>Cuisine: {{ recipe.cuisine }}</p>
        <!-- Add more details as needed -->

        <h2>Instructions:</h2>
        <ul>
          <li v-for="instruction in recipe.instructions" :key="instruction.step_number">
            {{ instruction.name }}
          </li>
        </ul>

        <!-- Check if recipe.images is defined and has at least one element -->
        <img v-if="recipe.images && recipe.images.length > 0" :src="recipe.images[0].thumbnail_url" alt="Recipe Image" />

        <p>Price: {{ recipe.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>
