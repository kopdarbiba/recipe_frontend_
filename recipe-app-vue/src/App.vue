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
        <router-link to="/about">About</router-link>
        <router-link to="/recipes">Recipes</router-link>
        <div class="dropdown">
          <button class="dropbtn">Cuisines</button>
          <div class="dropdown-content">
            <a href="#" @click="updateCuisine('all')">All Cuisines</a>
            <a href="#" @click="updateCuisine('latvian')">Latvian</a>
            <a href="#" @click="updateCuisine('russian')">Russian</a>
            
          </div>
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

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      selectedCuisine: 'all',
    };
  },
  methods: {
  updateCuisine(cuisine) {
    this.selectedCuisine = cuisine;
    this.$router.push({ name: 'Recipes', query: { cuisines: cuisine } });
  }
}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: rgb(68, 61, 60);
  background-color: rgb(206, 195, 190);
  position: relative;
}

.language-dropdown {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
}

.language-dropdown select {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 2px;
  cursor: pointer;
  background-color: white;
  color: black;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

nav a, .search-button, .search-container button, .dropbtn {
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin: 0 10px;
  border: 1px solid white;
  border-radius: 2px;
  cursor: pointer;
}

nav a:hover, .search-button:hover, .search-container button:hover {
  background-color: #555;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-container input {
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 2px;
  color: black;
}

main {
  margin: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 2px;
  cursor: pointer;
  background-color: #333;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 142px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #555;
}


</style>

