<template>
    <div>
      <label for="language-select">Select Language:</label>
      <select v-model="selectedLanguage" id="language-select" @change="changeLanguage">
        <option v-for="(lang, index) in languages" :key="index" :value="lang.code">{{ lang.name }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedLanguage: 'lv', // Default language
        languages: [
          { code: 'en', name: 'English' },
          { code: 'lv', name: 'Latvian' },
          { code: 'ru', name: 'Russian' }
          // Add more languages as needed
        ]
      };
    },
    methods: {
      changeLanguage() {
        this.$emit('language-change', this.selectedLanguage);
      }
    }
  }
  </script>
  
  <style scoped>
  label {
    margin-right: 5px;
  }
  </style>
  