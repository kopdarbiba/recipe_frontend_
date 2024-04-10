<template>
  <div>
    <h1>Select a Cuisine</h1>
    <div v-if="loading">Loading cuisines...</div>
    <div v-else-if="cuisines.length">
      <button v-for="cuisine in cuisines" :key="cuisine.id" @click="selectCuisine(cuisine)">
        {{ getCuisineName(cuisine) }}
      </button>
    </div>
    <div v-else>No cuisines found.</div>
    <!-- Pagination Controls -->
    <button @click="fetchCuisines(currentPage - 1)" :disabled="currentPage <= 1">Previous</button>
    <button @click="fetchCuisines(currentPage + 1)" :disabled="currentPage >= totalPages">Next</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cuisines',
  data() {
    return {
      cuisines: [],
      loading: false,
      currentPage: 1,
      totalPages: 1,
    };
  },
  watch: {
    '$route.query.lang'() {
      this.fetchCuisines(this.currentPage);
    },
    currentPage(newPage) {
      this.fetchCuisines(newPage);
    },
  },
  methods: {
    async fetchCuisines(page = 1) {
      try {
        console.log(`Fetching page: ${page}`);
        this.loading = true;
        const lang = this.$route.query.lang || 'lv';
        const response = await axios.get(`http://localhost:8000/recipes/cuisines/?lang=${lang}&page=${page}`);
        const data = response.data;
        this.cuisines = data.results;
        this.currentPage = page;
        this.totalPages = data.total_pages;
      } catch (error) {
        console.error("There was an error fetching the cuisines:", error);
      } finally {
        this.loading = false;
      }
    },
    selectCuisine(cuisine) {
      const lang = this.$route.query.lang || 'lv'; // Use the current language or default to Latvian if not provided
      let cuisineName = ''; // Initialize cuisine name variable
      // Determine which cuisine name to use based on the current language
      switch (lang) {
        case 'en':
          cuisineName = cuisine.name_en.toLowerCase();
          break;
        case 'ru':
          cuisineName = cuisine.name_ru.toLowerCase();
          break;
        case 'lv':
        default:
          cuisineName = cuisine.name_lv.toLowerCase();
      }
      const url = `/recipes/by-cuisine/${encodeURIComponent(cuisineName)}/?lang=${lang}`;
      this.$router.push(url);
    },
    getCuisineName(cuisine) {
      switch (this.$route.query.lang) {
        case 'en':
          return cuisine.name_en;
        case 'ru':
          return cuisine.name_ru;
        case 'lv':
        default:
          return cuisine.name_lv;
      }
    },
  },
  created() {
    this.fetchCuisines(this.currentPage);
  },
};
</script>

<style>
/* Your existing styles */
</style>
