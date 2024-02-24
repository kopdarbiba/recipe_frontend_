<template>
  <div id="app">
    <Header />
    <main>
      <RecipeList />
    </main>
    <Footer />
  </div>
</template>

<script>
import RecipeList from './components/RecipeList.vue';

export default {
  components: {
    RecipeList,
  },
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
</style>
