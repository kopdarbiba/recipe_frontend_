<template>
  <div id="app">
    <Header />
    <LanguageSelection />
    <nav>
      <div class="nav-buttons">
        <router-link to="/home">{{ $t("home") }}</router-link>
        <router-link to="/about">{{ $t("about-us") }}</router-link>
        <router-link to="/">{{ $t("recipe-card") }}</router-link>
        <!-- <router-link to="/recipes">Recipes</router-link> -->
        <div class="dropdown">
          <button class="dropbtn">Cuisines</button>
          <div class="dropdown-content">
            <a href="#" @click="updateCuisine('all')">All Cuisines</a>
            <a href="#" @click="updateCuisine('latvian')">Latvian</a>
            <a href="#" @click="updateCuisine('russian')">Russian</a>    
          </div>
        <!-- <router-link to="/newrecipe">Build your own recipe</router-link>   -->
        </div>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">🔍</button>
      </div>
    </nav>
    <main>
    </main>
    <p>Recipe details</p>
    <BasicRecipeCard RecipeID="3"></BasicRecipeCard>
    <!-- <BasicRecipeCard RecipeID="4"></BasicRecipeCard>
    <BasicRecipeCard RecipeID="5"></BasicRecipeCard> -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BasicRecipeCard from './components/BasicRecipeCard.vue'
// import Recipes from './components/Recipes.vue';
import LanguageSelection from './components/LanguageSelection.vue'

const cuisines = [
    { label: 'All Cuisines', value: 'all' },
    { label: 'Latvian', value: 'latvian' },
    { label: 'Russian', value: 'russian' },

  ];
const selectedCuisine = ref('all');
const route = useRoute();
const router = useRouter();

const updateCuisine = (cuisine) => {
  selectedCuisine.value = cuisine;
  router.push({ name: 'Recipes', query: { cuisines: cuisine } });
};

</script>

