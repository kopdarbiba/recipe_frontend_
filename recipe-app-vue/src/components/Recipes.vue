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
        <button @click="fetchRecipes(currentPage - 1)" :disabled="currentPage <= 1">Prev</button>
        <span>Page {{ currentPage }}</span>
        <button @click="fetchRecipes(currentPage + 1)" :disabled="!next">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Recipes',
    props: ['query'],
    data() {
      return {
        recipes: [],
        currentPage: 1,
        next: null,
        previous: null,
      };
    },
    watch: {
      'query.cuisines': {
        handler(newCuisines) {
          this.fetchRecipes(1, newCuisines);
        },
        immediate: true
      }
    },
    methods: {
      fetchRecipes(page, cuisines = this.query.cuisines) {
        let url = `http://127.0.0.1:8000/api/recipes/search/?page=${page}`;
        if (cuisines && cuisines !== 'all') {
          url += `&cuisines=${cuisines}`;
        }
  
        axios.get(url)
          .then(response => {
            this.recipes = response.data.results;
            this.next = response.data.next;
            this.previous = response.data.previous;
            this.currentPage = page;
          })
          .catch(error => {
            console.error("Error fetching recipes:", error);
          });
      }
    }
  };
  </script>

  <style scoped>
  .recipes-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .recipes-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .recipe-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 240px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .recipe-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  
  .recipe-box img {
    max-width: 100%;
    height: auto;
  }
  
  .pagination {
    text-align: center;
    margin-top: 20px;
  }
  
  .pagination button {
    padding: 5px 10px;
    margin-right: 5px;
  }
  </style>
