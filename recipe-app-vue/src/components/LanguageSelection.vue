<script setup lang="lv">
import { useI18n } from 'vue-i18n'

const { t } = useI18n();

</script>


<template>
     <div class="language-dropdown">
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="locale">{{ locale }}</option>
      </select>
    </div>
</template>