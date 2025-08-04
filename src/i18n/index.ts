import { createI18n } from 'vue-i18n'
import en from './en-US'
import pt from './pt-BR'

const getBrowserLocale = (): string => {
  const lang = navigator.language || navigator.languages[0] || 'en-US'
  return lang.startsWith('pt') ? 'pt-BR' : 'en-US'
}

export default createI18n({
  legacy: false, // required for Composition API
  locale: getBrowserLocale(),
  fallbackLocale: 'en-US',
  messages: {
    'en-US': en,
    'pt-BR': pt,
  },
})
