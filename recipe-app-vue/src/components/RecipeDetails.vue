<template>
    <div>
      <h1>{{ recipe.title }}</h1>
      <p>{{ recipe.description }}</p>
  
      <!-- Check if recipe.images is defined and has at least one element -->
      <img v-if="recipe.images && recipe.images.length > 0" :src="recipe.images[0].thumbnail_url" alt="Recipe Image" />
  
      <p>Price: {{ recipe.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipe: Object, // Pass the recipe as a prop
    },
  };
  </script>
  