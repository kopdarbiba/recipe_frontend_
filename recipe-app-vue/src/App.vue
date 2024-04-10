<template>
  <div id="app">
    <Header />
    <LanguageSelector @language-change="changeLanguage" />
    <nav>
      <router-link to="/home">Home</router-link> | 
      <router-link to="/about">About</router-link> |
      <router-link to="/cuisines">Cuisines</router-link>
    </nav>
    <main class="container">
      <!-- Pass currentLang as a prop to all routed components -->
      <router-view :current-lang="currentLang" @cuisine-selected="selectCuisine" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import LanguageSelector from './components/LanguageSelector.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    LanguageSelector,
  },
  data() {
    return {
      currentLang: 'lv', // Default language, consider initializing from URL
    };
  },
  methods: {
    changeLanguage(lang) {
      this.currentLang = lang;
      // Update URL without reloading the app to reflect the current language
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, lang: lang } });
    },
    selectCuisine(cuisineId) {
      this.$router.push({ name: 'recipes-by-cuisine', params: { cuisineId: cuisineId } });
    },
  },
  created() {
    // Initialize currentLang from URL if available
    if (this.$route.query.lang) {
      this.currentLang = this.$route.query.lang;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; /* Adjust as needed */
  background-color: rgb(169, 185, 97);
}

main {
  margin: 20px;
}

nav {
  margin-bottom: 20px; /* Add some space below the nav links */
}
</style>
