<template>
  <li>
    <div>
      <!-- <h1>{{ recipe.id }}</h1> -->
      <h1>{{ recipe.title }}</h1>
      
      <!-- Check if recipe.images is defined and has at least one element -->
      <img v-if="recipe.images && recipe.images.length > 0" :src="recipe.images[0].generate_presigned_url_for_thumbnail" alt="Recipe Image" />
      
    </div>
  </li>
  </template>
  
  <script>
  export default {
    props: {
      recipe: Object, // Pass the recipe as a prop
    },
  };
  </script>
  