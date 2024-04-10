<template>
  <div>
    <h1>Recipes for {{ cuisineName }}</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="recipes.length">
      <div class="recipe-grid">
        <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
          <!-- <div class="recipe-image">
            <img :src="recipe.images[0].thumbnail_url" :alt="recipe.title" />
          </div> -->
          <div class="recipe-details">
            <h2>{{ recipe.title }}</h2>
            <div class="recipe-steps">
              <h3>Cooking Steps:</h3>
              <ol>
                <li v-for="step in recipe.instructions" :key="step.step_number">
                  {{ step.name }}
                </li>
              </ol>
            </div>
            <div class="recipe-ingredients">
              <h3>Ingredients:</h3>
              <ul>
                <li v-for="ingredient in recipe.recipe_ingredients" :key="ingredient.ingredient">
                  {{ ingredient.quantity }} {{ ingredient.unit }} - {{ ingredient.ingredient }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No recipes found for this cuisine.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipesByCuisine',
  props: {
    cuisineName: String,
    currentLang: String,
  },
  data() {
    return {
      recipes: [],
      loading: false,
    };
  },
  methods: {
    async fetchRecipes() {
      this.loading = true;
      const url = `http://localhost:8000/recipes/by-cuisine/${encodeURIComponent(this.cuisineName)}/?lang=${this.currentLang}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const { results } = await response.json();
        this.recipes = results;
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchRecipes();
  },
};
</script>

<style scoped>
.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.recipe-card {
  border: 1px solid #ccc;
  padding: 20px;
}

/* .recipe-image img {
  max-width: 100%;
} */

.recipe-details {
  margin-top: 10px;
}

.recipe-steps ol {
  padding-left: 20px;
}

.recipe-ingredients ul {
  padding-left: 20px;
}
</style>
