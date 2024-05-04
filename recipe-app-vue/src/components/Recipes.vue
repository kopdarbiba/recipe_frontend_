<template>
    <div class="recipes-container">
      <h1>Recipes</h1>
      <div class="recipes-grid">
        <div v-for="recipe in recipes" :key="recipe.id" class="recipe-box">
          <router-link :to="`/recipes/${recipe.id}`">
            <h2>{{ recipe.title }}</h2>
            <img v-if="recipe.images.length > 0" :src="recipe.images[0].thumbnail_url" :alt="recipe.title" />
          </router-link>
        </div>
      </div>
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }}</span>
        <button @click="nextPage" :disabled="!next">Next</button>
      </div>
    </div>
  </template>
  
<script setup>
import { ref, watchEffect } from 'vue';
  
const API_URL = 'http://127.0.0.1:8000/api/recipes/search/';
const recipes = ref([]);
const currentPage = ref(1);
const next = ref(null);
const previous = ref(null);
const selectedCuisine = ref('all');

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  currentPage.value++;
};

watchEffect(async () => {
  let url = `${API_URL}?page=${currentPage.value}`;
  if (selectedCuisine.value !== 'all') {
    url += `&cuisines=${selectedCuisine.value}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    recipes.value = data.results;
    next.value = data.next;
    previous.value = data.previous;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
});
    
  </script>
  