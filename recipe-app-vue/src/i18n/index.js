import { createI18n } from 'vue-i18n';

import lv from './locales/lv.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

export default createI18n({
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