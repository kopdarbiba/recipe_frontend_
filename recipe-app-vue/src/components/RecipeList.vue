
  
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
      axios.get('http://localhost:8000/api/recipes/?lang=en')
      // axios.get('http://13.49.33.156/api/recipes/search/?lang=lv&ordering=total_price')
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
  
  <template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>        
        <ul>
            <RecipeDetails v-for="recipe in recipes.results" :key="recipe" :recipe="recipe" />
          </ul>
        </div>
    </div>
  </template>