import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ru from './locales/ru.json'
import uz from './locales/uz.json'

export default createI18n({
  legacy: false,
  locale: 'uz', // default locale
  fallbackLocale: 'uz',
  messages: {
    en,
    ru,
    uz
  }
})
