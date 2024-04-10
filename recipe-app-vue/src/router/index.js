import { createRouter, createWebHistory } from 'vue-router';
import Cuisines from '../components/Cuisines.vue';
import RecipesByCuisine from '../components/RecipesByCuisine.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home, 
  },
  {
    path: '/about',
    name: 'About',
    component: About, 
  },
  {
    path: '/cuisines',
    name: 'Cuisines',
    component: Cuisines,
  },
  {
    path: '/recipes/by-cuisine/:cuisineName',
    name: 'recipes-by-cuisine',
    component: RecipesByCuisine,
    props: true,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
