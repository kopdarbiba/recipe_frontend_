// Import necessary dependencies
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Recipes from '../components/Recipes.vue';
import RecipeDetail from '../components/RecipeDetail.vue';
import NewRecipe from '../components/NewRecipe.vue';


const routes = [
  {path: '/home', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/', redirect: '/home'},
  {path: '/recipes', name: 'Recipes', component: Recipes, props: (route) => ({ query: route.query })},
  {path: '/recipes/:id', name: 'RecipeDetail', component: RecipeDetail, props: true},
  {path: '/newrecipe', name: 'NewRecipe', component: NewRecipe},
];

const router = createRouter({history: createWebHistory(), routes});

export default router;
