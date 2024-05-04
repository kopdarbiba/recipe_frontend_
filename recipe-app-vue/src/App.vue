<template>
  <div id="app">
    <Header />
    <div class="language-dropdown">
      <select>
        <option value="LV">LV</option>
        <option value="EN">EN</option>
        <option value="RU">RU</option>
      </select>
    </div>
    <nav>
      <div class="nav-buttons">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/recipes">Recipes</router-link>
        <div class="dropdown">
          <button class="dropbtn">Cuisines</button>
          <div class="dropdown-content">
            <a href="#" @click="updateCuisine('all')">All Cuisines</a>
            <a href="#" @click="updateCuisine('latvian')">Latvian</a>
            <a href="#" @click="updateCuisine('russian')">Russian</a>    
          </div>
        <router-link to="/newrecipe">Build your own recipe</router-link>  
        </div>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">🔍</button>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// import Recipes from './components/Recipes.vue';

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

