<template>
  <div class="home-container">
    <div class="banner">
      <h1>Welcome to Our Recipe Site</h1>
      <p>Discover new recipes, cooking techniques, and explore cuisines from around the world.</p>
    </div>
    <div class="quick-recipes">
      <h2>Quick Recipes</h2>
      <div class="recipe-grid">
        <div v-for="recipe in quickRecipes" :key="recipe.id" class="recipe-card">
          <router-link :to="`/recipes/${recipe.id}`">
            <h3>{{ recipe.title }}</h3>
            <p>Cooking Time: {{ recipe.cooking_time }} minutes</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      quickRecipes: [],
    };
  },
  mounted() {
    this.fetchQuickRecipes();
  },
  methods: {
    async fetchQuickRecipes() {
      try {
        const response = await axios.get('http://localhost:8000/api/recipes/search/?ordering=cooking_time');
        // Limiting the number of recipes to 3
        this.quickRecipes = response.data.results.slice(0, 3);
      } catch (error) {
        console.error('Error fetching quick recipes:', error);
      }
    }
  }
};
</script>

<style>
.home-container .banner {
  text-align: center;
  margin-bottom: 40px;
}

.home-container .recipe-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.home-container .recipe-card {
  width: 45%;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.home-container .recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-card h3 {
  margin: 0;
}
</style>
