import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/style.css'

import { createI18n } from 'vue-i18n';

import lv from './i18n/locales/lv.json';
import en from './i18n/locales/en.json';
import ru from './i18n/locales/ru.json';

const i18n = createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    messages: {
        lv,
        en,
        ru,
    },
    legacy: false,
    globalInjection: true,
    })

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')